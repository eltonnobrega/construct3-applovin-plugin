"use strict";
{
    const C3 = self.C3;

    C3.Plugins.eltonnobrega_applovin.Instance = class applovinInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);

            this.initialized = false;
            this.countryCode = "xx";
            this.sdkKey = "";
            this.debug_log = "";
            this.debug_Event = "";
            this.consent_Status = "";
            this.INTER_AD_UNIT_ID = "";
            this.REWARDED_AD_UNIT_ID = "";
            this.BANNER_AD_UNIT_ID = "";
            this.MREC_AD_UNIT_ID = "";

            if (typeof cordova == 'undefined')
            {
                return;
            }
            else
            {};

            this.Conditions = C3.Plugins.eltonnobrega_applovin.Cnds;
            this.AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');

            if (properties)
            {
                this.sdkKey = properties[0];
            }


            if (typeof this.AppLovinMAX == 'undefined')
            {
                return;
            }
            else
            {};

            const self = this;

            /////////////////////////////////////
            ////// Methods

            // Settings

            const _setVerboseLogging = async(condition) => {
                self.debug_log = ("Called Method :: setVerboseLogging");
                self.AppLovinMAX.setVerboseLogging(condition);
            };

            const _setMuted = async(muted) => {
                self.debug_log = ("Called Method :: setMuted");
                self.AppLovinMAX.setMuted(muted);
            };

            const _showMediationDebugger = async() => {
                self.debug_log = ("Called Method :: showMediationDebugger");
                self.AppLovinMAX.showMediationDebugger();
            };

            const _initialize = async(sdkKey) => {
                if (self.initialized)
                {
                    self.debug_log = ("Called Method :: Initialize - Action is not allowed after initialization.");
                    return;
                }

                if (!self.sdkKey) self.sdkKey = sdkKey;

                if (!self.sdkKey)
                {
                    self.debug_log = ("Called Method :: Initialize - Don't sdkKey in initialization.");
                    return;
                }
                // SDK is initialized, start loading ads
                self.AppLovinMAX.initialize(self.sdkKey, function(configuration)
                {
                    self.countryCode = configuration.countryCode;
                    self.debug_Event = JSON.stringify(configuration);
                    if (configuration.consentDialogState == self.AppLovinMAX.ConsentDialogState.APPLIES)
                    {
                        // Show user consent dialog
                        self.consent_Status = 1;
                        self.Trigger(self.Conditions.OnConsentRequired);
                    }
                    else if (configuration.consentDialogState == self.AppLovinMAX.ConsentDialogState.DOES_NOT_APPLY)
                    {
                        // No need to show consent dialog, proceed with initialization
                        self.Trigger(self.Conditions.OnConsentNotRequired);
                        self.consent_Status = 2;
                    }
                    else
                    {
                        // Consent dialog state is unknown. Proceed with initialization, but check if the consent
                        // dialog should be shown on the next application initialization
                        self.Trigger(self.Conditions.OnConsentUnknown);
                        self.consent_Status = 0;
                    }
                });

                // Lock from reinitialization.
                self.initialized = true;

                self.debug_log = ("Called Method :: Initialize");
            }

            // Privacy Methods

            //If the user consents, set the user consent flag to true
            const _setHasUserConsent = async(consent) => {
                self.debug_log = ("Called Method :: setHasUserConsent");
                self.AppLovinMAX.setHasUserConsent(consent);
            }
            const _hasUserConsent = () => {
                return self.AppLovinMAX.hasUserConsent();
            };
            //If you know that the user is in an age-restricted category (i.e., under the age of 16), set the age-restricted user flag to true
            const _setIsAgeRestrictedUser = async(age_restricted) => {
                self.debug_log = ("Called Method :: setIsAgeRestrictedUser");
                self.AppLovinMAX.setIsAgeRestrictedUser(age_restricted);
            }
            const _isAgeRestrictedUser = () => {
                return self.AppLovinMAX.isAgeRestrictedUser();
            };
            //If such a user does not opt out of the sale of their personal information, set the do-not-sell flag to false.
            const _setDoNotSell = async(do_not_sell) => {
                self.debug_log = ("Called Method :: setDoNotSell");
                self.AppLovinMAX.setDoNotSell(do_not_sell);
            }
            const _isDoNotSell = () => {
                return self.AppLovinMAX.isDoNotSell();
            };

            // Ads Methods

            const _loadInterstitial = async(INTER_AD_UNIT_ID) => {
                if (!self.sdkKey)
                {
                    self.debug_log = ("Called Method :: Initialize - Don't sdkKey in initialization.");
                    return;
                }
                self.INTER_AD_UNIT_ID = INTER_AD_UNIT_ID;
                if (!self.INTER_AD_UNIT_ID)
                {
                    self.debug_log = ("Called Method :: loadInterstitial Fail. INTER_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: loadInterstitial");
                self.AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID);
            }
            const _showInterstitial = async(INTER_AD_UNIT_ID) => {
                let inter_id = self.INTER_AD_UNIT_ID;
                if (INTER_AD_UNIT_ID)
                {
                    inter_id = INTER_AD_UNIT_ID;
                }
                if (!inter_id)
                {
                    self.debug_log = ("Called Method :: showInterstitial Fail. INTER_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: showInterstitial");
                self.AppLovinMAX.showInterstitial(inter_id);
            }
            const _isInterstitialReady = (INTER_AD_UNIT_ID) => {
                let inter_id = self.INTER_AD_UNIT_ID;
                if (INTER_AD_UNIT_ID)
                {
                    inter_id = INTER_AD_UNIT_ID;
                }
                if (!inter_id)
                {
                    self.debug_log = ("Called Method :: isInterstitialReady Fail. INTER_AD_UNIT_ID empty");
                    return false;
                }
                self.debug_log = ("Called Method :: isInterstitialReady");
                return self.AppLovinMAX.isInterstitialReady(inter_id);
            }

            const _loadRewardedAd = async(REWARDED_AD_UNIT_ID) => {
                self.REWARDED_AD_UNIT_ID = REWARDED_AD_UNIT_ID;
                if (!self.REWARDED_AD_UNIT_ID)
                {
                    self.debug_log = ("Called Method :: loadRewardedAd Fail. REWARDED_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: loadRewardedAd");
                self.AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);
            }
            const _showRewardedAd = async(REWARDED_AD_UNIT_ID) => {
                let rewarded_id = self.REWARDED_AD_UNIT_ID;
                if (REWARDED_AD_UNIT_ID)
                {
                    rewarded_id = REWARDED_AD_UNIT_ID;
                }
                if (!rewarded_id)
                {
                    self.debug_log = ("Called Method :: showRewardedAd Fail. REWARDED_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: showRewardedAd");
                self.AppLovinMAX.showRewardedAd(rewarded_id);
            }
            const _isRewardedAdReady = (REWARDED_AD_UNIT_ID) => {
                let rewarded_id = self.REWARDED_AD_UNIT_ID;
                if (REWARDED_AD_UNIT_ID)
                {
                    rewarded_id = REWARDED_AD_UNIT_ID;
                }
                if (!rewarded_id)
                {
                    self.debug_log = ("Called Method :: isRewardedAdReady Fail. REWARDED_AD_UNIT_ID empty");
                    return false;
                }
                self.debug_log = ("Called Method :: isRewardedAdReady");
                return self.AppLovinMAX.isRewardedAdReady(rewarded_id);
            }

            const _createBanner = async(BANNER_AD_UNIT_ID, position) => {
                self.BANNER_AD_UNIT_ID = BANNER_AD_UNIT_ID;
                if (!self.BANNER_AD_UNIT_ID)
                {
                    self.debug_log = ("Called Method :: createBanner Fail. BANNER_AD_UNIT_ID empty");
                    return;
                }
                let position_tmp = self.AppLovinMAX.AdViewPosition.BOTTOM_CENTER;
                if (position) position_tmp = position;
                self.debug_log = ("Called Method :: createBanner");
                self.AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, position_tmp);
            }
            const _setBannerBackgroundColor = async(BANNER_AD_UNIT_ID, backgroundColor) => {
                let banner_id = self.BANNER_AD_UNIT_ID;
                if (BANNER_AD_UNIT_ID)
                {
                    banner_id = BANNER_AD_UNIT_ID;
                }
                if (!banner_id)
                {
                    self.debug_log = ("Called Method :: setBannerBackgroundColor Fail. BANNER_AD_UNIT_ID empty");
                    return;
                }
                let backgroundColor_tmp = '#000000';
                if (backgroundColor) backgroundColor_tmp = backgroundColor;
                self.debug_log = ("Called Method :: setBannerBackgroundColor");
                self.AppLovinMAX.setBannerBackgroundColor(banner_id, backgroundColor_tmp);
            }
            const _showBanner = async(BANNER_AD_UNIT_ID) => {
                let banner_id = self.BANNER_AD_UNIT_ID;
                if (BANNER_AD_UNIT_ID)
                {
                    banner_id = BANNER_AD_UNIT_ID;
                }
                if (!banner_id)
                {
                    self.debug_log = ("Called Method :: showBanner Fail. BANNER_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: showBanner");
                self.AppLovinMAX.showBanner(banner_id);
            }
            const _hideBanner = async(BANNER_AD_UNIT_ID) => {
                let banner_id = self.BANNER_AD_UNIT_ID;
                if (BANNER_AD_UNIT_ID)
                {
                    banner_id = BANNER_AD_UNIT_ID;
                }
                if (!banner_id)
                {
                    self.debug_log = ("Called Method :: hideBanner Fail. BANNER_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: hideBanner");
                self.AppLovinMAX.hideBanner(banner_id);
            }
            const _destroyBanner = async(BANNER_AD_UNIT_ID) => {
                let banner_id = self.BANNER_AD_UNIT_ID;
                if (BANNER_AD_UNIT_ID)
                {
                    banner_id = BANNER_AD_UNIT_ID;
                }
                if (!banner_id)
                {
                    self.debug_log = ("Called Method :: hideBanner Fail. BANNER_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: hideBanner");
                self.AppLovinMAX.destroyBanner(banner_id);
            };


            // MRECs are sized to 300x250 on phones and tablets
            // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
            const _createMRec = async(MREC_AD_UNIT_ID, position) => {
                self.MREC_AD_UNIT_ID = MREC_AD_UNIT_ID;
                if (!self.MREC_AD_UNIT_ID)
                {
                    self.debug_log = ("Called Method :: createMRec Fail. MREC_AD_UNIT_ID empty");
                    return;
                }
                let position_tmp = self.AppLovinMAX.AdViewPosition.BOTTOM_CENTER;
                if (position) position_tmp = position;
                self.debug_log = ("Called Method :: createMRec");
                self.AppLovinMAX.createMRec(MREC_AD_UNIT_ID, position_tmp);
            }
            const _showMRec = async(MREC_AD_UNIT_ID) => {
                let mrec_id = self.MREC_AD_UNIT_ID;
                if (MREC_AD_UNIT_ID)
                {
                    mrec_id = MREC_AD_UNIT_ID;
                }
                if (!mrec_id)
                {
                    self.debug_log = ("Called Method :: showMRec Fail. MREC_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: showMRec");
                self.AppLovinMAX.showMRec(mrec_id);
            }
            const _hideMRec = async(MREC_AD_UNIT_ID) => {
                let mrec_id = self.MREC_AD_UNIT_ID;
                if (MREC_AD_UNIT_ID)
                {
                    mrec_id = MREC_AD_UNIT_ID;
                }
                if (!mrec_id)
                {
                    self.debug_log = ("Called Method :: showMRec Fail. MREC_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: hideMRec");
                self.AppLovinMAX.hideMRec(mrec_id);
            }
            const _destroyMRec = async(MREC_AD_UNIT_ID) => {
                let mrec_id = self.MREC_AD_UNIT_ID;
                if (MREC_AD_UNIT_ID)
                {
                    mrec_id = MREC_AD_UNIT_ID;
                }
                if (!mrec_id)
                {
                    self.debug_log = ("Called Method :: showMRec Fail. MREC_AD_UNIT_ID empty");
                    return;
                }
                self.debug_log = ("Called Method :: hideMRec");
                self.AppLovinMAX.destroyMRec(mrec_id);
            };

            /////////////////////////////////////
            // Register Methods

            this._setVerboseLogging = _setVerboseLogging;
            this._setMuted = _setMuted;
            this._showMediationDebugger = _showMediationDebugger;
            this._initialize = _initialize;
            this._setHasUserConsent = _setHasUserConsent;
            this._hasUserConsent = _hasUserConsent;
            this._setIsAgeRestrictedUser = _setIsAgeRestrictedUser;
            this._isAgeRestrictedUser = _isAgeRestrictedUser;
            this._setDoNotSell = _setDoNotSell;
            this._isDoNotSell = _isDoNotSell;
            this._loadInterstitial = _loadInterstitial;
            this._showInterstitial = _showInterstitial;
            this._isInterstitialReady = _isInterstitialReady;
            this._loadRewardedAd = _loadRewardedAd;
            this._showRewardedAd = _showRewardedAd;
            this._isRewardedAdReady = _isRewardedAdReady;
            this._createBanner = _createBanner;
            this._setBannerBackgroundColor = _setBannerBackgroundColor;
            this._showBanner = _showBanner;
            this._hideBanner = _hideBanner;
            this._destroyBanner = _destroyBanner;
            this._createMRec = _createMRec;
            this._showMRec = _showMRec;
            this._hideMRec = _hideMRec;
            this._destroyMRec = _destroyMRec;


            /////////////////////////////////////
            // Register Trigger Events

            globalThis.addEventListener('OnInterstitialLoadedEvent', async(adInfo) => {
                // Interstitial ad is ready to be shown. AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID) will now return 'true'
                self.Trigger(self.Conditions.OnInterstitialLoaded);

                self.debug_log = ('OnInterstitialLoaded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnInterstitialLoadFailedEvent', async(adInfo) => {
                // Interstitial ad failed to load 
                // We recommend retrying with exponentially higher delays up to a maximum delay (in this case 64 seconds)
                self.Trigger(self.Conditions.OnInterstitialLoadFailed);
                self.debug_log = ('OnInterstitialLoadFailed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnInterstitialClickedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialClicked);
                self.debug_log = ('OnInterstitialClicked Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnInterstitialDisplayedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialDisplayed);
                self.debug_log = ('OnInterstitialDisplayed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnInterstitialAdFailedToDisplayEvent', async(adInfo) => {
                // Interstitial ad failed to display. We recommend loading the next ad
                self.Trigger(self.Conditions.OnInterstitialAdFailedToDisplay);
                self.debug_log = ('OnInterstitialAdFailedToDisplay Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnInterstitialHiddenEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnInterstitialHidden);
                self.debug_log = ('OnInterstitialHidden Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });


            globalThis.addEventListener('OnRewardedAdLoadedEvent', async(adInfo) => {
                // Rewarded ad is ready to be shown. AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID) will now return 'true'
                self.Trigger(self.Conditions.OnRewardedAdLoaded);
                self.debug_log = ('OnRewardedAdLoaded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdLoadFailedEvent', async(adInfo) => {
                // OnRewardedAd failed to load 
                // We recommend retrying with exponentially higher delays up to a maximum delay (in this case 64 seconds)
                self.Trigger(self.Conditions.OnRewardedAdLoadFailed);
                self.debug_log = ('OnRewardedAdLoadFailed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdClickedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnRewardedAdClicked);
                self.debug_log = ('OnRewardedAdClicked Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdDisplayedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnRewardedAdDisplayed);
                self.debug_log = ('OnRewardedAdDisplayed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdFailedToDisplayEvent', async(adInfo) => {
                // Rewarded ad failed to display. We recommend loading the next ad
                self.Trigger(self.Conditions.OnRewardedAdFailedToDisplay);
                self.debug_log = ('OnRewardedAdFailedToDisplay Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdHiddenEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnRewardedAdHidden);
                self.debug_log = ('OnRewardedAdHidden Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnRewardedAdReceivedRewardEvent', async(adInfo) => {
                // Rewarded ad was displayed and user should receive the reward
                self.Trigger(self.Conditions.OnRewardedAdReceivedReward);
                self.debug_log = ('OnRewardedAdReceivedReward Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });

            globalThis.addEventListener('OnBannerAdLoadedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnBannerAdLoaded);
                self.debug_log = ('OnBannerAdLoaded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnBannerAdLoadFailedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnBannerAdLoadFailed);
                self.debug_log = ('OnBannerAdLoadFailed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnBannerAdClickedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnBannerAdClicked);
                self.debug_log = ('OnBannerAdClicked Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnBannerAdCollapsedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnBannerAdCollapsed);
                self.debug_log = ('OnBannerAdCollapsed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnBannerAdExpandedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnBannerAdExpanded);
                self.debug_log = ('OnBannerAdExpanded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });

            globalThis.addEventListener('OnMRecAdLoadedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnMRecAdLoaded);
                self.debug_log = ('OnMRecAdLoaded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnMRecAdLoadFailedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnMRecAdLoadFailed);
                self.debug_log = ('OnMRecAdLoadFailed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnMRecAdClickedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnMRecAdClicked);
                self.debug_log = ('OnMRecAdClicked Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnMRecAdCollapsedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnMRecAdCollapsed);
                self.debug_log = ('OnMRecAdCollapsed Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
            globalThis.addEventListener('OnMRecAdExpandedEvent', async(adInfo) => {
                self.Trigger(self.Conditions.OnMRecAdExpanded);
                self.debug_log = ('OnMRecAdExpanded Event');
                self.debug_Event = await(JSON.stringify(adInfo));
            });
        }

        /////////////////////////////////////

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }


        GetDebuggerProperties()
        {
            return [
            {
                title: "applovin",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }];
        }
    };
}