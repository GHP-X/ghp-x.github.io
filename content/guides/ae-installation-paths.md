---
title: "After Effects Installation Paths"
description: "Default install locations."
slug: "ae-installation-paths"
category: "guides"
updatedAt: "2026-05-12T22:03:49.000Z"
---

# ✦ **After Effects Installation Paths**

If using another version of After Effects, **change "2026" to your version.**

#### Table of Contents

## ⭐ **Windows**

### **Presets**

**User Presets:** `\Documents\Adobe\After Effects 2026\User Presets`

All user presets (presets which you made yourself or downloaded online) should be saved to and imported here.

**Default Presets:** `C:\Program Files\Adobe\Adobe After Effects 2026\Support Files\Presets`

This location is reserved for default presets. Adding or removing items in this location is not recommended.

Extention: `.ffx`

### **Plugins**

**Local:** `C:\Program Files\Adobe\Adobe After Effects 2026\Support Files\Plug-ins`

Plug-ins installed here are unique to that specific version of After Effects (ex: 2025) and are usually manually installed here by the user.

> Some plugins may also be installed to the sub-folder `\Effects`

**Common:** `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore`

Plug-ins installed here are often (not always) compatible with both After Effects and Premiere Pro, visible in all versions, and are typically installed via an installer.

Extension: `.aex`

### **Extensions**

**System:** `C:\Program Files\Common Files\Adobe\CEP\extensions` or `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions`

**User:** `C:\Users\%USERNAME%\AppData\Roaming\Adobe\CEP\extensions` (if you don't have administrator).

Extension: `Folder`, typically consist of many sub-folders such as CSXS, META-INF, etc.

### **Scripts**

**Dockable scripts:** `C:\Program Files\Adobe\Adobe After Effects 2026\Support Files\Scripts\ScriptUI Panels`

**Non-dockable scripts:** `C:\Program Files\Adobe\Adobe After Effects 2026\Support Files\Scripts`

*Most scripts are dockable, it's unlikely that you'll install an undockable script unless you're a developer.*

Extension: `.jsx` or `.jsxbin`

## ⭐ **MacOS**

### **Presets**

**User Presets:** `~/Documents/Adobe/After Effects 2026/User Presets`

All user presets (presets which you made yourself or downloaded online) should be saved to and imported here.

**Default Presets:** `/Applications/Adobe After Effects 2026/Presets`

This location is reserved for default presets. Adding or removing items in this location is not recommended.

Extension: `.ffx`

### **Plugins**

**Local:** `/Applications/Adobe After Effects 2026/Plug-ins/`

Plug-ins installed here are unique to that specific version of After Effects (ex: 2025) and are usually manually installed here by the user.

> Some plugins may also be installed to the sub-folder `/Effects`

**Common:** `/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore`

Plug-ins installed here are often (not always) compatible with both After Effects and Premiere Pro, visible in all versions, and are typically installed via an installer.

Extension: `.plugin`

### **Extensions**

**System:** `/Library/Application Support/Adobe/CEP/extensions`

**User:** `/Users/<user>/Library/Application Support/Adobe/CEP/extensions`

Extension: `Folder`, typically consist of many sub-folders such as CSXS, META-INF, etc.

### Scripts

**Dockable scripts:** `/Applications/Adobe After Effects 2026/Scripts/ScriptUI Panels`

**Nnon-dockable scripts:** `/Applications/Adobe After Effects 2026/Scripts`

*Most scripts are dockable, it's unlikely that you'll install an undockable script unless you're a developer.*

Extension: `.jsx` or `.jsxbin`