import { SamplePluginSettings, DEFAULT_SETTINGS, SettingTab } from './settings'
import manifest from '../manifest.json'

import { Plugin, Events, App, PluginManifest } from 'obsidian'

// Remember to rename these classes and interfaces!

export default interface SamplePlugin extends Events {
	// TODO: Add your plugin's events here
}

export default class SamplePlugin extends Plugin {
	settings: SamplePluginSettings

	private onunloadList: Array<(...args: unknown[]) => void> = []

	constructor(app: App, manifest: PluginManifest) {
		super(app, manifest)
		Events.call(this)
	}

	async onload() {
		await this.loadSettings()

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SettingTab(this.app, this))
	}

	addClassTo(el: HTMLElement, classes: string|string[]) {
		classes = Array.isArray(classes) ? classes : [classes]
		el.classList.add(...classes.map(e => this.getClass(e)))
		return this
	}

	getClass(cls: string) {
		return `${manifest.id}-${cls}`
	}

	onunload() {
		do this.onunloadList.pop()?.call(this)
		while (this.onunloadList.length)
	}

  addOnunload(callback: (...args: unknown[]) => void) {
    !this.onunloadList.includes(callback) && this.onunloadList.push(callback)
		return this
  }

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
	}

	async saveSettings() {
		await this.saveData(this.settings)
	}
}

Object.assign(SamplePlugin.prototype, Events.prototype)
