---
title: "Maxon Troubleshooting"
description: "Red Giant and Maxon plugin fixes."
slug: "maxon-fixes"
category: "support"
updatedAt: "2026-05-12T22:03:49.000Z"
---

# ✦ **Maxon Troubleshooting Guide**

**Please pay attention while reading this guide and it's descriptions!**  
This guide goes over a couple different issues, find the one that applies to you.

## **You installed the plugins but it wont show in After Effects:**

If you are using After Effects 2023 or a version prior (2022,2021,2020..), Red Giant and Universe will not install correctly. This has been a fact since their 2024 releases. While they are compatible and fully functional once installed, you'll have to force them to install with a few extra steps.

### **Windows - Automatic Method**

1.  Open PowerShell and copy paste this: `Get-ChildItem -Path "HKLM:\SOFTWARE\Adobe\After Effects"`
    
2.  Under "Name", you will see your version.
    

![Version](https://i.imgur.com/4SYtF5y.png)

#### **Change "XX.X" in the next step to this number.**

3.  Open PowerShell as Administrator and paste this in: `Copy-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\XX.X" -Destination "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse`

*Remember to change XX.X to your own After Effects version, else this will not work!*

4.  Now run the plugin installers (Red Giant & Universe).
    
5.  Close After Effects & run the patch (service unlocker).
    
6.  Once done, check if all installed in After Effects, then run: `Remove-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse`
    

### **Windows - Manual Method**

1.  Download and install After Effects 2024 or above (2025, 2026..)
2.  Run Red Giant installer and Universe installers.
3.  Patch the plugins through the Service Unlocker.
4.  Open your main After Effects version and verify that it works.
5.  You can now delete After Effects 2024+ if you wish.

* * *

### **MacOS - Manual Method**

1.  Download and install After Effects 2024 or above (2025, 2026..)
2.  Run Red Giant installer and Universe installers.
3.  Patch the plugins via `license.pkg`
4.  Open your main After Effects version and verify that it works.
5.  You can now delete After Effects 2024+ if you wish.

## **Your plugins are unlicensed:**

![Unlicensed](https://i.imgur.com/4TSUdss.png)

*Your plugins will be unlicensed if it shows a grey box on screen when effect is applied.*

Open Maxon App and look in the top right corner — are you logged in (do you see your email?).

If you are logged in, log out and **stay in RLM mode**, then run patcher again. RLM mode = logged out.

If it still shows as unlicensed despite being patched correctly (It would shows a green circle in maxon app, with the words "license found") next to the product, try clearing your cache in After Effects.

If you're on MacOS, ensure terminal has full disk access and re-run the license via System Settings > Privacy & Security > Full Disk Access > add terminal.

Is you're on windows and use a third party anti-virus besides Windows Security, ensure it isn't blocking the patch. Instructions will vary per anti-virus.

## **Only some effects are unlicensed:**

This typically happens with Trapcode plugins, such as Particular. When After Effects is installed on drive that isn't your main, the patcher isn't able to locate the files correctly to patch them. Create a support post in our discord and one of our members should be able to supply you with patched copies which you can replace via plugin directory.

## **Service Unavailable / Security Alert:**

![Maxon App](https://i.imgur.com/oZ9Hpjw.jpeg)

Completely uninstall maxon using the cleaners below

Windows: [**Download Link**](https://www.mediafire.com/file_premium/7syqgmncway64io/win.maxon-cleaner.cmd/file)

Mac: [**Download Link**](https://www.mediafire.com/file_premium/i5t8bz227wtxige/uninstallmaxon.sh/file)

Run the Maxon App installer and patch again.

You can check manually if you have Red Giant Service here:

Windows: `C:\Program Files\Red Giant\Services`

MacOS: `/Library/Application Support/Red Giant/Services/`