---
title: "Changing After Effects Version"
description: "Upgrade without losing plugins."
slug: "changing-ae-version"
category: "guides"
updatedAt: "2026-05-12T22:03:49.000Z"
---

# ✦ **Changing After Effects Versions**

This is a quick, comprehensive guide on how to switch After Effects versions. This guide includes how to transfer your presets, plugins and scripts.

> Note that if you are simply updating to the same year, just a newer build (e.g 2025.1 → 2025.2), it will automatically transfer everything by itself.

**This guide only applies if you are changing years (example: 2024 → 2025)**.

> It is possible to have two versions of After Effects installed at the same time. Rather than felling nervous, install the version you’d like to switch to, make sure everything is transfered, and only after would you uninstall your previous version.

## ⭐ **Plugins**

#### **Common**

If a plugin is located under your Common folder, it will automatically show up under all installed After Effects versions and in this case you don’t have to worry about reinstalling or transferring them. Plugins such as Red Giant and Sapphire install to common. You do not have to worry about plugins installed in the following folders.

Windows: `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore`  
Mac: `Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore`

#### **Local**

Plugins that are located in this location will only be visible to that specific After Effects version, which in this case you’ll have to copy and paste the files over into your new folder.

Windows: `C:\Program Files\Adobe\Adobe After Effects [year]\Support Files\Plug-ins`  
Mac: `/Applications/Adobe After Effects [year]/Plug-ins/`

1.  Navigate to the folder mentioned above.
    
    *   Copy everything **except** the following default folders:
        *   (AdobePSL)
        *   Cineware by Maxon
        *   Effects
        *   Extensions
        *   Format
        *   Keyframe

> Note: Check inside the “effects” sub-folder as a small amount of plugins install here.

2.  Paste the files you've copied somewhere easy for you to find such as on your desktop. Creating a folder may be easier for some individuals.
    
3.  Move said files to your new After Effects plugin folder and you're done.
    

## ⭐ **Presets**

For presets, simply copy and paste them into your new folder using the same idea.

Windows: `\Documents\Adobe\After Effects [year]\User Presets`  
Mac: `~/Documents/Adobe/After Effects [year]/User Presets`

1.  Navigate to the folder mentioned above, \[year\] as in your old version and copy all items.
    
2.  Paste the files you've copied somewhere easy for you to find such as on your desktop. Creating a folder may be easier for some individuals.
    
3.  Move said files to your new After Effects preset folder and you're done.
    

## ⭐ **Other**

#### **Extensions**

Extensions are installed to a location visible to all After Effects versions installed, you will not have to transfer these.

Location: [https://satvrn.li/ae-paths](/guides/ae-installation-paths)

#### **Scripts**

Scripts will need to be moved to your new After Effects script folder, using the same concept as above.

Windows: `C:\Program Files\Adobe\Adobe After Effects [year]\Support Files\Scripts\ScriptUI Panels`  
Mac: `/Applications/Adobe After Effects [year]/Scripts/ScriptUI Panels`