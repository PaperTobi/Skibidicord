/*
 * Skibidicord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export const enum IpcEvents {
    QUICK_CSS_UPDATE = "SkibidicordQuickCssUpdate",
    THEME_UPDATE = "SkibidicordThemeUpdate",
    GET_QUICK_CSS = "SkibidicordGetQuickCss",
    SET_QUICK_CSS = "SkibidicordSetQuickCss",
    UPLOAD_THEME = "SkibidicordUploadTheme",
    DELETE_THEME = "SkibidicordDeleteTheme",
    GET_THEMES_DIR = "SkibidicordGetThemesDir",
    GET_THEMES_LIST = "SkibidicordGetThemesList",
    GET_THEME_DATA = "SkibidicordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "SkibidicordGetThemeSystemValues",
    GET_SETTINGS_DIR = "SkibidicordGetSettingsDir",
    GET_SETTINGS = "SkibidicordGetSettings",
    SET_SETTINGS = "SkibidicordSetSettings",
    OPEN_EXTERNAL = "SkibidicordOpenExternal",
    OPEN_QUICKCSS = "SkibidicordOpenQuickCss",
    GET_UPDATES = "SkibidicordGetUpdates",
    GET_REPO = "SkibidicordGetRepo",
    UPDATE = "SkibidicordUpdate",
    BUILD = "SkibidicordBuild",
    OPEN_MONACO_EDITOR = "SkibidicordOpenMonacoEditor",

    GET_PLUGIN_IPC_METHOD_MAP = "SkibidicordGetPluginIpcMethodMap",

    OPEN_IN_APP__RESOLVE_REDIRECT = "SkibidicordOIAResolveRedirect",
    VOICE_MESSAGES_READ_RECORDING = "SkibidicordVMReadRecording",
}
