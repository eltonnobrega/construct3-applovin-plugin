"use strict";
{
    const SDK = self.SDK;

    const PLUGIN_ID = "eltonnobrega_applovin";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "monetisation";

    const PLUGIN_CLASS = SDK.Plugins.eltonnobrega_applovin = class applovinPlugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("eltonnobrega");
            this._info.SetHelpUrl(self.lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);
            this._info.SetAndroidXEnabled(true);

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("text", "sdk-key", ""),
            ]);


            this._info.AddCordovaPluginReference(
            {
                id: "cordova-plugin-applovin-max"
            });


            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}