"use strict";
{
    self.C3.Plugins.eltonnobrega_applovin.Acts = {
        async Setbannerbackgroundcolor(BANNER_AD_UNIT_ID, backgroundColor)
        {
            await this._setBannerBackgroundColor(BANNER_AD_UNIT_ID, backgroundColor);
        },

        async Createbanner(BANNER_AD_UNIT_ID, position)
        {
            await this._createBanner(BANNER_AD_UNIT_ID, position);
        },

        async Hidebanner(BANNER_AD_UNIT_ID)
        {
            await this._hideBanner(BANNER_AD_UNIT_ID);
        },

        async Showbanner(BANNER_AD_UNIT_ID)
        {
            await this._showBanner(BANNER_AD_UNIT_ID);
        },

        async Loadrewardedad(REWARDED_AD_UNIT_ID)
        {
            await this._loadRewardedAd(REWARDED_AD_UNIT_ID);
        },

        async Showrewardedad(REWARDED_AD_UNIT_ID)
        {
            await this._showRewardedAd(REWARDED_AD_UNIT_ID);
        },

        async Showinterstitial(INTER_AD_UNIT_ID)
        {
            await this._showInterstitial(INTER_AD_UNIT_ID);
        },

        async Loadinterstitial(INTER_AD_UNIT_ID)
        {
            await this._loadInterstitial(INTER_AD_UNIT_ID);
        },

        async Initialize(SDK_KEY)
        {
            await this._initialize(SDK_KEY);
        },

        async Sethasuserconsent(consent)
        {
            await this._setHasUserConsent(consent);
        },

        async Setisagerestricteduser(age_restricted)
        {
            await this._setIsAgeRestrictedUser(age_restricted);
        },

        async Setdonotsell(do_not_sell)
        {
            await this._setDoNotSell(do_not_sell);
        },

        async Createmrec(MREC_AD_UNIT_ID, position)
        {
            await this._createMRec(MREC_AD_UNIT_ID, position);
        },

        async Showmrec(MREC_AD_UNIT_ID)
        {
            await this._showMRec(MREC_AD_UNIT_ID);
        },

        async Hidemrec(MREC_AD_UNIT_ID)
        {
            await this._showMRec(MREC_AD_UNIT_ID);
        },

        async Destroybanner(BANNER_AD_UNIT_ID)
        {
            await this._destroyBanner(BANNER_AD_UNIT_ID);
        },

        async Destroymrec(MREC_AD_UNIT_ID)
        {
            await this._destroyMRec(MREC_AD_UNIT_ID);
        },

        async Setverboselogging(condition)
        {
            await this._setVerboseLogging(condition);
        },

        async setMuted(muted)
        {
            await this._setMuted(muted);
        },

        async showMediationDebugger()
        {
            await this._showMediationDebugger();
        }
    };
}