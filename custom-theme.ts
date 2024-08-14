
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fcedef 
		"--color-primary-50": "255 252 253", // #fffcfd
		"--color-primary-100": "254 251 252", // #fefbfc
		"--color-primary-200": "254 251 251", // #fefbfb
		"--color-primary-300": "254 248 249", // #fef8f9
		"--color-primary-400": "253 242 244", // #fdf2f4
		"--color-primary-500": "252 237 239", // #fcedef
		"--color-primary-600": "227 213 215", // #e3d5d7
		"--color-primary-700": "189 178 179", // #bdb2b3
		"--color-primary-800": "151 142 143", // #978e8f
		"--color-primary-900": "123 116 117", // #7b7475
		// secondary | #cc9225 
		"--color-secondary-50": "247 239 222", // #f7efde
		"--color-secondary-100": "245 233 211", // #f5e9d3
		"--color-secondary-200": "242 228 201", // #f2e4c9
		"--color-secondary-300": "235 211 168", // #ebd3a8
		"--color-secondary-400": "219 179 102", // #dbb366
		"--color-secondary-500": "204 146 37", // #cc9225
		"--color-secondary-600": "184 131 33", // #b88321
		"--color-secondary-700": "153 110 28", // #996e1c
		"--color-secondary-800": "122 88 22", // #7a5816
		"--color-secondary-900": "100 72 18", // #644812
		// tertiary | #816c6e 
		"--color-tertiary-50": "236 233 233", // #ece9e9
		"--color-tertiary-100": "230 226 226", // #e6e2e2
		"--color-tertiary-200": "224 218 219", // #e0dadb
		"--color-tertiary-300": "205 196 197", // #cdc4c5
		"--color-tertiary-400": "167 152 154", // #a7989a
		"--color-tertiary-500": "129 108 110", // #816c6e
		"--color-tertiary-600": "116 97 99", // #746163
		"--color-tertiary-700": "97 81 83", // #615153
		"--color-tertiary-800": "77 65 66", // #4d4142
		"--color-tertiary-900": "63 53 54", // #3f3536
		// success | #405b7d 
		"--color-success-50": "226 230 236", // #e2e6ec
		"--color-success-100": "217 222 229", // #d9dee5
		"--color-success-200": "207 214 223", // #cfd6df
		"--color-success-300": "179 189 203", // #b3bdcb
		"--color-success-400": "121 140 164", // #798ca4
		"--color-success-500": "64 91 125", // #405b7d
		"--color-success-600": "58 82 113", // #3a5271
		"--color-success-700": "48 68 94", // #30445e
		"--color-success-800": "38 55 75", // #26374b
		"--color-success-900": "31 45 61", // #1f2d3d
		// warning | #d1a251 
		"--color-warning-50": "248 241 229", // #f8f1e5
		"--color-warning-100": "246 236 220", // #f6ecdc
		"--color-warning-200": "244 232 212", // #f4e8d4
		"--color-warning-300": "237 218 185", // #eddab9
		"--color-warning-400": "223 190 133", // #dfbe85
		"--color-warning-500": "209 162 81", // #d1a251
		"--color-warning-600": "188 146 73", // #bc9249
		"--color-warning-700": "157 122 61", // #9d7a3d
		"--color-warning-800": "125 97 49", // #7d6131
		"--color-warning-900": "102 79 40", // #664f28
		// error | #fd185f 
		"--color-error-50": "255 220 231", // #ffdce7
		"--color-error-100": "255 209 223", // #ffd1df
		"--color-error-200": "255 197 215", // #ffc5d7
		"--color-error-300": "254 163 191", // #fea3bf
		"--color-error-400": "254 93 143", // #fe5d8f
		"--color-error-500": "253 24 95", // #fd185f
		"--color-error-600": "228 22 86", // #e41656
		"--color-error-700": "190 18 71", // #be1247
		"--color-error-800": "152 14 57", // #980e39
		"--color-error-900": "124 12 47", // #7c0c2f
		// surface | #211e1c 
		"--color-surface-50": "222 221 221", // #dedddd
		"--color-surface-100": "211 210 210", // #d3d2d2
		"--color-surface-200": "200 199 198", // #c8c7c6
		"--color-surface-300": "166 165 164", // #a6a5a4
		"--color-surface-400": "100 98 96", // #646260
		"--color-surface-500": "33 30 28", // #211e1c
		"--color-surface-600": "30 27 25", // #1e1b19
		"--color-surface-700": "25 23 21", // #191715
		"--color-surface-800": "20 18 17", // #141211
		"--color-surface-900": "16 15 14", // #100f0e
		
	}
}