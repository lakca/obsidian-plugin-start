// @ts-ignore
import { filenames as localeFilenames, default as localeFiles } from '../locales/*.json'

import en from '../locales/en.json'

const LOCALES: { [key: string]: Partial<typeof en>} = Object.fromEntries(localeFilenames.map((name: string, i: number) => {
  return [name.match(/([^/]+)\.json$/)[1], localeFiles[i].default]
}))

// https://forum.obsidian.md/t/a-way-to-get-obsidian-s-currently-set-language/17829/4
export function t(str: keyof typeof en): string {
  const lang = window.localStorage.getItem('language') || 'en'
  const locale = LOCALES[lang] || en
  return str in locale ? locale[str] : str
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDeep<R>(obj: any, path: string, sep = '.'): R {
  for (const key of path.split(sep)) {
    if (obj != null) {
      obj = obj[key]
    } else {
      break
    }
  }
  return obj
}
