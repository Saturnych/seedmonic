import HDKey from 'hdkey';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';
import { bufferToHex, privateToAddress } from 'ethereumjs-util';
import { getWordBlocks, returnJson } from '$lib/utils';
import consts from '$lib/vars/consts';

function generateEthAddress(mnemonic) {
  const hdpath = "m/44'/60'/0'/0/0";
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdkey = HDKey.fromMasterSeed(seed).derive(hdpath);
  const address = bufferToHex(privateToAddress(hdkey.privateKey));
  return address;
}

function generateBtcAddress(mnemonic) {
  const hdpath = "m/49'/0'/0'/0/0";
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdkey = HDKey.fromMasterSeed(seed).derive(hdpath);
  const { address } = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({ pubkey: hdkey.publicKey }),
  });
  return address;
}

function entropyToMnemonic(entropy = '00000000000000000000000000000000') {
	// defaults to BIP39 English word list
	// uses HEX strings for entropy
	const mnemonic = bip39.entropyToMnemonic(entropy)
	// => abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
	// reversible
	return bip39.mnemonicToEntropy(mnemonic);
	// => '00000000000000000000000000000000'
}

const parseRequest = async (event: Event): Response => {
	try {
		let mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
		const { url, request } = event;
		if (request.method === 'POST') {
			const data = await request.json();
			if ('mnemonic' in data) mnemonic = data.mnemonic;
		} else {
			mnemonic = url.searchParams.get('mnemonic');
		}
		return returnJson({
			mnemonic,
			entropy: bip39.mnemonicToEntropy(mnemonic),
			btc: generateBtcAddress(mnemonic),
			eth: generateEthAddress(mnemonic),
		});
	} catch (err) {
		console.error('api/word error:', err);
		return returnJson(err, err.status ?? 400, err.body?.message ?? 'Error', false);
	}
};

export const POST = async (event: Event): Response => parseRequest(event);

export const GET = async (event: Event): Response => parseRequest(event);
