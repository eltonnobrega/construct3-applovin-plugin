# construct3-applovin-plugin
Plugin for construct 3 to add AppLovin ads.

I want to thank:

To the AppLovin staff for creating a cordova library and facilitating the creation of this Addon;

To Piranha_305 for creating the C3IDE. It's a tool that makes creating Addons for construct 3 a lot easier.

I made this plugin so that the construct 3 community has more options to monetize their applications. I invite everyone who wants to help, there are sent corrections.

Actions:

        Initialize(SDK_KEY)

        Sethasuserconsent(consent)

        Setisagerestricteduser(age_restricted)

        Setdonotsell(do_not_sell)
		
        Setverboselogging(condition)

        setMuted(muted)
		
        showMediationDebugger()
		
        Setbannerbackgroundcolor(BANNER_AD_UNIT_ID, backgroundColor)

		Createbanner(BANNER_AD_UNIT_ID, position)

        Hidebanner(BANNER_AD_UNIT_ID)

        Showbanner(BANNER_AD_UNIT_ID)
		
		Destroybanner(BANNER_AD_UNIT_ID)

        Loadrewardedad(REWARDED_AD_UNIT_ID)

        Showrewardedad(REWARDED_AD_UNIT_ID)

        Showinterstitial(INTER_AD_UNIT_ID)

        Loadinterstitial(INTER_AD_UNIT_ID)

        Createmrec(MREC_AD_UNIT_ID, position)

        Showmrec(MREC_AD_UNIT_ID)

        Hidemrec(MREC_AD_UNIT_ID)

        Destroymrec(MREC_AD_UNIT_ID)

Conditions:

        OnConsentUnknown()

        OnConsentNotRequired()

        OnConsentRequired()

        hasUserConsent()

        isAgeRestrictedUser()

        isDoNotSell()

        OnBannerAdLoaded()

        OnBannerAdLoadFailed()

        OnBannerAdClicked()
		
        OnBannerAdCollapsed()

        OnBannerAdExpanded()
		
		OnRewardedAdLoaded()
		
		OnRewardedAdLoadFailed()
		
		OnRewardedAdDisplayed()
		
		OnRewardedAdFailedToDisplay()
		
		OnRewardedAdClicked()

        OnRewardedAdReceivedReward()

        OnRewardedAdHidden()
		
		isRewardedAdReady(REWARDED_AD_UNIT_ID)

        OnInterstitialLoaded()

        OnInterstitialLoadFailed()

        OnInterstitialDisplayed()

        OnInterstitialAdFailedToDisplay()
		
		OnInterstitialClicked()

        OnInterstitialHidden()

        isInterstitialReady(INTER_AD_UNIT_ID)

        OnMRecAdLoaded()
		
		OnMRecAdLoadFailed()
		
		OnMRecAdClicked()
		
		OnMRecAdExpanded()

        OnMRecAdCollapsed()

Expressions:

        Debuglog

        Debugevent

        ConsentStatus

        Countrycode
