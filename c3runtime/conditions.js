"use strict";
{
    self.C3.Plugins.eltonnobrega_applovin.Cnds = {
        OnBannerAdLoaded()
        {
            return true;
        },

        OnBannerAdLoadFailed()
        {
            return true;
        },

        OnBannerAdClicked()
        {
            return true;
        },

        OnBannerAdCollapsed()
        {
            return true;
        },

        OnBannerAdExpanded()
        {
            return true;
        },

        OnRewardedAdReceivedReward()
        {
            return true;
        },

        OnRewardedAdHidden()
        {
            return true;
        },

        OnRewardedAdFailedToDisplay()
        {
            return true;
        },

        OnRewardedAdDisplayed()
        {
            return true;
        },

        OnRewardedAdClicked()
        {
            return true;
        },

        OnRewardedAdLoadFailed()
        {
            return true;
        },

        OnRewardedAdLoaded()
        {
            return true;
        },

        OnInterstitialLoaded()
        {
            return true;
        },

        OnInterstitialLoadFailed()
        {
            return true;
        },

        OnInterstitialClicked()
        {
            return true;
        },

        OnInterstitialDisplayed()
        {
            return true;
        },

        OnInterstitialAdFailedToDisplay()
        {
            return true;
        },

        OnInterstitialHidden()
        {
            return true;
        },

        isInterstitialReady(INTER_AD_UNIT_ID)
        {
            return this._isInterstitialReady(INTER_AD_UNIT_ID);
        },

        isRewardedAdReady(REWARDED_AD_UNIT_ID)
        {
            return this._isRewardedAdReady(REWARDED_AD_UNIT_ID);
        },

        OnMRecAdExpanded()
        {
            return true;
        },

        OnMRecAdCollapsed()
        {
            return true;
        },

        OnMRecAdClicked()
        {
            return true;
        },

        OnMRecAdLoadFailed()
        {
            return true;
        },

        OnMRecAdLoaded()
        {
            return true;
        },

        OnConsentUnknown()
        {
            return true;
        },

        OnConsentNotRequired()
        {
            return true;
        },

        OnConsentRequired()
        {
            return true;
        },

        hasUserConsent()
        {
            return this._hasUserConsent();
        },

        isAgeRestrictedUser()
        {
            return this._isAgeRestrictedUser();
        },

        isDoNotSell()
        {
            return this._isDoNotSell();
        }
    };
}