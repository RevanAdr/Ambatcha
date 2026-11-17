
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const COLORTERM: string;
	export const USERNAME: string;
	export const NODE_ENV: string;
	export const SHELL: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SEAT: string;
	export const HISTCONTROL: string;
	export const PATH: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const HYPRCURSOR_SIZE: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_RUNTIME_DIR: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const USER: string;
	export const WAYLAND_DISPLAY: string;
	export const GPG_TTY: string;
	export const GDMSESSION: string;
	export const _: string;
	export const DESKTOP_SESSION: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const SHLVL: string;
	export const TERM_PROGRAM: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LD_LIBRARY_PATH: string;
	export const LANG: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const DEBUGINFOD_IMA_CERT_PATH: string;
	export const XDG_SESSION_CLASS: string;
	export const HOME: string;
	export const ZED_TERM: string;
	export const HOSTNAME: string;
	export const SPICETIFY_INSTALL: string;
	export const XDG_DATA_DIRS: string;
	export const OLDPWD: string;
	export const HYPRLAND_CMD: string;
	export const XDG_SESSION_ID: string;
	export const MAIL: string;
	export const PWD: string;
	export const GDM_LANG: string;
	export const WINDOWID: string;
	export const XDG_SESSION_EXTRA_DEVICE_ACCESS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const INIT_CWD: string;
	export const LS_COLORS: string;
	export const HISTSIZE: string;
	export const MOZ_GMP_PATH: string;
	export const XDG_BACKEND: string;
	export const XCURSOR_SIZE: string;
	export const DEBUGINFOD_URLS: string;
	export const ZED_ENVIRONMENT: string;
	export const LOGNAME: string;
	export const XDG_VTNR: string;
	export const LESSOPEN: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const DISPLAY: string;
	export const TERM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const EDITOR: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const XDG_SESSION_TYPE: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		COLORTERM: string;
		USERNAME: string;
		NODE_ENV: string;
		SHELL: string;
		npm_config_user_agent: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SEAT: string;
		HISTCONTROL: string;
		PATH: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		HYPRCURSOR_SIZE: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_RUNTIME_DIR: string;
		MOZ_ENABLE_WAYLAND: string;
		USER: string;
		WAYLAND_DISPLAY: string;
		GPG_TTY: string;
		GDMSESSION: string;
		_: string;
		DESKTOP_SESSION: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		SHLVL: string;
		TERM_PROGRAM: string;
		XDG_CURRENT_DESKTOP: string;
		LD_LIBRARY_PATH: string;
		LANG: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		DEBUGINFOD_IMA_CERT_PATH: string;
		XDG_SESSION_CLASS: string;
		HOME: string;
		ZED_TERM: string;
		HOSTNAME: string;
		SPICETIFY_INSTALL: string;
		XDG_DATA_DIRS: string;
		OLDPWD: string;
		HYPRLAND_CMD: string;
		XDG_SESSION_ID: string;
		MAIL: string;
		PWD: string;
		GDM_LANG: string;
		WINDOWID: string;
		XDG_SESSION_EXTRA_DEVICE_ACCESS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		INIT_CWD: string;
		LS_COLORS: string;
		HISTSIZE: string;
		MOZ_GMP_PATH: string;
		XDG_BACKEND: string;
		XCURSOR_SIZE: string;
		DEBUGINFOD_URLS: string;
		ZED_ENVIRONMENT: string;
		LOGNAME: string;
		XDG_VTNR: string;
		LESSOPEN: string;
		ALACRITTY_WINDOW_ID: string;
		DISPLAY: string;
		TERM: string;
		TERM_PROGRAM_VERSION: string;
		EDITOR: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		XDG_SESSION_TYPE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
