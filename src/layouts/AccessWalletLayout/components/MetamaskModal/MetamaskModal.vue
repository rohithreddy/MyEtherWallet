<template>
  <b-modal
    ref="metamask"
    :title="$t('accessWallet.accessByMetaMask')"
    hide-footer
    class="bootstrap-modal nopadding modal-metamask"
    centered
  >
    <div class="modal-content">
      <div v-if="isSafari" class="browser-catch">
        <h4>
          MetaMask is only available in these browsers:
        </h4>
        <div class="browser-logo-container">
          <a
            v-for="browser in browsers"
            :key="browser.name"
            :href="browser.link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img :src="browser.logo" />
          </a>
        </div>
      </div>
      <div v-else-if="web3WalletExists">
        <div class="modal-multi-icons">
          <img
            class="icon"
            src="~@/assets/images/icons/button-metamask-fox.svg"
          />
          <img class="icon" src="~@/assets/images/icons/clip.svg" />
          <img class="icon logo-small" src="~@/assets/images/logo-small.png" />
        </div>
        <div class="d-block content-container text-center">
          <h4 v-show="!unlockWeb3Wallet">
            {{ $t('accessWallet.metaMaskModalDesc') }}
          </h4>
          <h4 v-show="unlockWeb3Wallet">
            {{ $t('accessWallet.unlockMetamaskWallet') }}
          </h4>
        </div>
        <div class="accept-terms">
          <label class="checkbox-container">
            {{ $t('accessWallet.acceptTerms') }}
            <router-link to="/terms-and-conditions">
              {{ $t('common.terms') }} </router-link
            >.
            <input
              type="checkbox"
              @click="accessMyWalletBtnDisabled = !accessMyWalletBtnDisabled"
            />
            <span class="checkmark" />
          </label>
        </div>
        <div class="button-container">
          <b-btn
            v-show="!unlockWeb3Wallet"
            :disabled="accessMyWalletBtnDisabled"
            class="mid-round-button-green-filled close-button"
            @click="getWeb3Wallet"
            >{{ $t('common.accessMyWallet') }}</b-btn
          >
          <b-btn
            v-show="unlockWeb3Wallet"
            class="mid-round-button-green-filled close-button"
            @click="getWeb3Wallet"
            >{{ $t('accessWallet.tryAgain') }}</b-btn
          >
        </div>
      </div>
      <div v-else>
        <div class="modal-multi-icons">
          <img
            class="icon"
            src="~@/assets/images/icons/button-metamask-fox.svg"
          />
        </div>
        <div class="d-block content-container text-center">
          <h4>{{ $t('accessWallet.installMetaMaskModalDesc') }}</h4>
        </div>
        <div class="accept-terms hidden">
          <label class="checkbox-container">
            {{ $t('accessWallet.acceptTerms') }}
            <router-link to="/terms-and-conditions">
              {{ $t('common.terms') }} </router-link
            >. <input type="checkbox" /> <span class="checkmark" />
          </label>
        </div>
        <div class="button-container">
          <a
            v-show="!refreshPage"
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="mid-round-button-green-filled close-button"
            @click="refreshPage = true"
            >{{ $t('accessWallet.installMetamask') }}</a
          >
          <b-btn
            v-show="refreshPage"
            class="mid-round-button-green-filled close-button"
            @click="reload"
            >{{ $t('accessWallet.refresh') }}</b-btn
          >
        </div>
      </div>
      <customer-support />
    </div>
    <!-- .modal-content -->
  </b-modal>
</template>

<script>
import CustomerSupport from '@/components/CustomerSupport';
import { Web3Wallet } from '@/wallets/software';
import { Toast } from '@/helpers';
import Web3 from 'web3';
import { mapGetters } from 'vuex';
import platform from 'platform';
import brave from '@/assets/images/browser/brave.png';
import chrome from '@/assets/images/browser/chrome.png';
import firefox from '@/assets/images/browser/firefox.png';
import opera from '@/assets/images/browser/opera.png';

export default {
  components: {
    'customer-support': CustomerSupport
  },
  props: {
    networkAndAddressOpen: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      accessMyWalletBtnDisabled: true,
      unlockWeb3Wallet: false,
      web3WalletExists: false,
      refreshPage: false,
      isSafari: false,
      browsers: [
        {
          logo: brave,
          link: 'https://brave.com/',
          name: 'brave'
        },
        {
          logo: firefox,
          link: 'https://www.mozilla.org/en-US/firefox/?v=b',
          name: 'firefox'
        },
        {
          logo: opera,
          link: 'https://www.opera.com/',
          name: 'opera'
        },
        {
          logo: chrome,
          link: 'https://www.google.com/chrome/',
          name: 'chrome'
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      path: 'path'
    })
  },
  mounted() {
    this.isSafari = platform.name.toLowerCase() === 'safari';
    this.web3WalletExists = this.checkWeb3();
  },
  methods: {
    reload() {
      window.location.reload();
    },
    async getWeb3Wallet() {
      if (this.checkWeb3() !== true) return;
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
        } catch (e) {
          Toast.responseHandler(e, Toast.WARN);
          this.web3WalletExists = false;
          return;
        }
        this.signIn(web3);
      } else if (window.web3) {
        this.signIn(window.web3);
      }
    },
    signIn(web3) {
      new Web3(web3.currentProvider).eth
        .getAccounts()
        .then(accounts => {
          window.ethereum.autoRefreshOnNetworkChange = false;
          if (!accounts.length) return (this.unlockWeb3Wallet = true);
          const address = accounts[0];
          const wallet = new Web3Wallet(address);
          this.$store.dispatch('decryptWallet', [wallet, web3.currentProvider]);
          this.$router.push({
            path: 'interface'
          });
        })
        .catch(e => {
          Toast.responseHandler(e, Toast.ERROR);
          return (this.web3WalletExists = false);
        });
    },
    checkWeb3() {
      return window.ethereum !== 'undefined' || window.web3 !== 'undefined';
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'MetamaskModal.scss';
</style>
