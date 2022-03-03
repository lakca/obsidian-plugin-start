import { App, PluginSettingTab } from "obsidian"

import SamplePlugin from "../main"

export interface SamplePluginSettings {
	// TODO: Add your plugin's settings here
}

export const DEFAULT_SETTINGS: SamplePluginSettings = {
	// TODO: Add your plugin's default settings here
}

export class SettingTab extends PluginSettingTab {
	plugin: SamplePlugin

	constructor(app: App, plugin: SamplePlugin) {
		super(app, plugin)
	}

	display(): void {
		const {containerEl} = this

		containerEl.empty()

		// TODO: Add your settings here
	}
}
