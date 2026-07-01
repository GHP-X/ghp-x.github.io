---
title: "Frequently Asked Questions"
description: "Common questions and troubleshooting."
slug: "faq"
category: "faq"
updatedAt: "2026-05-12T22:03:49.000Z"
---

# ✦ **Frequently Asked Questions**

## ⭐ **General**

The following questions apply to all users. Scroll further down for issues specfic to either Windows or Mac systems.

### 1\. Unable to access satvrn.li. e.g friend, or different device

If the site shows as a blank page or says it cannot be reached, set your DNS to 1.1.1.1 following the instructions below.

Windows: [https://developers.cloudflare.com/1.1.1.1/setup/windows/](https://developers.cloudflare.com/1.1.1.1/setup/windows/)  
Mac: [https://developers.cloudflare.com/1.1.1.1/setup/macos/](https://developers.cloudflare.com/1.1.1.1/setup/macos/)

You may also fix the issue with [WARP](https://one.one.one.one/) - quicker, though must be enabled any time you visit the site.

### 2\. Unable to access Pixeldrain

Pixeldrain is blocked in Italy amongst certain ISP, simply download using the GoFile mirror.

### 3\. Is \[plugin\] compatible with my After Effects version?

The majority of plugins available will work on any standard version of After Effects (2020+). Scripts and extensions will vary; look into their developer notes.

### 4\. How can I resolve "This unlicensed Adobe app will be disabled"?

This alert is fairly common and easily fixable.[**Click here**](/support/adobe-ungenuine-fix) to learn how to remove it.

### 5\. What will happen if I switch After Effects versions?

[**Click here**](/guides/changing-ae-version) to learn how you can make a smooth transition when upgrading versions without losing any of your plugins or presets. It's easier than you might think.

### 6\. What are plugins and which ones should I download?

[**Click here**](beginnersguide#what-are-plugins-and-which-ones-should-i-get) for starter recommendations. Ultimately, it entirely depends on your style.

### 7\. Which version of After Effects should I get?

The newest version (features) is always worth getting as long as you have enough RAM and a good CPU, [**click here for more information.**](beginnersguide#which-version-of-after-effects-should-i-get)

### 8\. Can I download cracked plugins despite having a legitimate copy?

Yes. Why are you paying for it though? XD

### 9\. There is a watermark when I use a plugin?

A watermark, typically a red X means that whatever plugin you're using is unlicensed. This indicates you did not install it properly. Make sure to properly read the instructions or refer to our support server for assistance.

### 10\. My software says it can be updated. Should I click accept?

No, these are official pop-ups. The software will no longer be licensed if you do so.

### 11\. I have duplicate effects from a plugin. What do I do?

This indicates you have two versions of a plugin installed, or in different locations. Choose and delete one of the paths shown in your error. For example, Sapphire:

`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Sapphire Plug-ins`  
`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\BorisFX\Sapphire Plug-ins`

You can either delete one of these folders, though, consider removing both of them and reinstalling if you're attempting to upgrade a plugin to be safe.

### 12\. I installed an extension (e.g. Flow) that appears in the list, but nothing happens when I click on it.

Ensure that the CEP (Common Extensibility Platform) is enabled.

**Windows:**

1.  Close After Effects.
2.  Download [**this file**](https://www.mediafire.com/file/g6pdj9v5xdyjkax/keys.reg/file) and run it.

**Mac:**

1.  Close After Effects and open Terminal.
2.  Copy and paste the text below:

ts

```
defaults write com.adobe.CSXS.10 PlayerDebugMode 1
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
defaults write com.adobe.CSXS.12 PlayerDebugMode 1
defaults write com.adobe.CSXS.13 PlayerDebugMode 1
```

3.  Hit enter and you're done.

### 13\. Generative AI is not working. Help!

AI Tools such as Generative Fill will not work on cracked versions of Photoshop due to the fact Adobe use a credit system for verification specifically for it.  

### 14\. Missing CEP folder.

Make sure your installation isn’t faulty, and that scripting and expressions are enabled in After Effects.

Open After Effects and enable “Allow Scripts to Write Files and Access Network”.

Windows: `Edit > Preferences > Scripting & Expressions`  
Mac: `After Effects > Preferences > Scripting & Expressions`

**Create the CEP folder manually:**  

Go to the location below and create a **CEP** folder, and inside that CEP folder, create another folder named **extensions**.

Mac: `/Library/Application Support/Adobe/`  
Windows: `C:\Program Files (x86)\Common Files\Adobe`

### 15\. Magic Bullet Look presets not appearing same as the original coloring.

Many Looks Builder tools were updated in the 2025 release, causing older presets to appear overexposured.

1.  Open Looks Builder.
2.  At the top at "In/Out Color Space", press the dropdown menu.
3.  Select "1D sRGB (Video)"

## ⭐ **Windows**

Common questions and troubleshooting for issues on Windows.

### 1\. "Windows cannot complete the extraction. The destination file could not be created"

This error occurs if a file hasn't been properly extracted. Please follow the instructions written at the top of our Windows page regarding how to use 7-Zip.

### 2\. "An unexpected error is keeping you from copying the file, Error 0x80004005"

This error occurs if a file hasn't been properly extracted. Please follow the instructions written at the top of our Windows page regarding how to use 7-Zip.

### 3\. "The application was unable to start correctly (Oxc0000142). Click OK to close the application."

Starting from version 24.1, **After Effects requires your processor to support Advanced Vector Extensions 2** or else the software will not launch.

If your processor does not support AVX2, **you'll need to downgrade to AE 2023 or lower**.

### 4\. "The system cannot find the path specified."

Move the folder to your desktop and try again. If that does not work, remove the "/" symbol from the folder name if included.

### 5\. Error Code: 24 (Adobe)

*   Extract the **iso** file itself (Right click > 7-Zip > Extract here)
*   Temporarily turn off your internet.
*   Open the extracted folder and run **Set-up.exe** again.

### 6\. "AfterFX.exe - System Error. The code execution cannot proceed because MSVCP110.dll was not found."

Your computer is missing necessary components. Install Microsoft Visual C++ Redistributable 2012: [https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) and restart your computer.

### 7\. DaVinci Resolve Studio not starting (Windows).

Rename OFX folder "Plugins" (`C:\Program Files\Common Files\OFX`) to "Plugins.origin".

### 8\. "The installation cannot continue as the installer file may be damaged. Download the installer file again."

This error occurs if a file hasn't been properly extracted. Please follow the instructions written at the top of our Windows page regarding how to use 7-Zip.

If it is properly extracted, it may mean you have leftovers from a previous installation. Use the official [Adobe Creative Cloud Cleaner Tool](https://swupmf.adobe.com/webfeed/CleanerTool/win/AdobeCreativeCloudCleanerTool.exe) to get rid of previous installations.

### 9\. Error Code 127 (Adobe)

[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This can happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.

1.  Navigate to the `adobetemp` folder located at `<Root Drive>\adobeTemp`. In the following example, the root drive is the C: drive.

TIP

If the folder doesn't exist, you can also create the folder.

2.  Right click anywhere on screen > **Properties**.
3.  In the **Security** tab, ensure that permissions for **System** and **Administrators** have **Full Control**.
4.  Turn off your antivirus temporarily or whitelist it.

### 10\. "Patching Error - Pattern in Resolve. exe matched 0 times in .text section. Expected exactly 1."

This error occurs when a user mistakenly installs the free version of DaVinci Resolve and then runs our patch, which is intended for the **Studio** version. Ensure that you install the correct version.

### 11\. Windows Defender is blocking an application from running and I don't know how to stop it?

You can either exclude or whitelist the file, disabling Defender completely is not recommended.

#### **Exclude** - [video tutorial](https://files.catbox.moe/b6hwg6.mp4)

1.  Click the Windows key and write "Settings".
2.  Go to Privacy & security > Windows Security > Virus & Threat Protection.
3.  Under Virus & threat protection settings, click "Manage settings".
4.  Under Exclusions, click on "Add or remove exclusions".
5.  Choose your installer/installation folder.

#### **Whitelist** - [video tutorial](https://files.catbox.moe/duo36i.mp4)

1.  Open Virus & threat protection.
2.  When the blocked file shows up under current threats, click it and on Action options, select "Allow on device".
3.  Finalize decision by pressing "start actions".

### 12\. I’m unable to launch specific games (e.g Valorant) after Adobe installation(s)?

If after installation you start having problems with programs and games that worked fine before, simply delete the following registry key:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\DevOverrideEnable
```

then reboot your system.

> If using GenP, you will have a toggle in-app for the Registry Key.

Certain games and other sensitive apps that use anti-cheat mechanisms may detect and flag DLL redirection as suspicious activity which may result in false positives.  
Source: [https://wiki.dbzer0.com/genp-guides/guide/#troubleshoot-section](https://wiki.dbzer0.com/genp-guides/guide/#troubleshoot-section)

### 13\. DeleteFile failed; code 5. Access is denied. (Red Giant Service.exe)

1.  Open Task Manager (Ctrl+Shift+Esc)
2.  Search **Red Giant Service** & **MxNotify**
3.  Right click > End tasks
4.  Try again.

### 14\. "Error copying file from \[...\] Red Giant Service.exe" (Maxon App)

1.  Open Task Manager (Ctrl+Shift+Esc)
2.  Search **Red Giant Service** & **MxNotify**
3.  Right click > End tasks
4.  Try again.

## ⭐ **MacOS**

Common questions and troubleshooting for issues on Mac.

### 1\. "After Effects can't continue: unexpected failure during application startup."

After Effects 2021 and below are not compatible with OS14 and higher. You won’t be able to launch these versions of After Effects. Your only option is to install After Effects 2022 or newer.

> If this appears on 2022+:  
> [https://community.adobe.com/t5/after-effects-bugs/after-effects-23-6-and-24-0-not-starting-on-macos-14-sonoma/idi-p/14139194#comments](https://community.adobe.com/t5/after-effects-bugs/after-effects-23-6-and-24-0-not-starting-on-macos-14-sonoma/idi-p/14139194#comments)

### 2\. "The following plugins are installed but are not yet compatible with this version".

This issue occurs when a user installs an outdated plugin only designed for Intel Macs on After Effects that is running natively on Apple Silicon (M1+ on After Effects 2022+).

Only a small number of plugins on our site are not supported, [**click here**](/guides/rosetta-guide) for a more in-depth explanation and your choices moving forward.

### 3\. "Is damaged and cannot be opened, you should eject the disk image / you should move it to the trash."

#### **If the error occurs when running an application file:**

1.  Drag the installer to your desktop, open Terminal and input:

```
sudo xattr -cr
```

2.  Drag the installer file next to the command. **There must be a space between the command and the file.**  
    Hit enter and submit your Mac password. Passwords are not displayed when typed into Terminal, you won't see this.

#### **If a plugin shows this error inside After Effects:**  

1.  Open Terminal and input:

```
sudo xattr -rd com.apple.quarantine
```

2.  Drag the plugin file next to the command, **there must be a space between the command and the file.**
    
3.  Hit enter and submit your Mac password. Passwords are not displayed when typed into Terminal, you wont see this.
    

Still having issues? Try using [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to solve the problem.

### 4\. "The installation cannot continue as the installer file may be damaged. Download the installer file again."

Right Click > Show Package Contents > Contents > MacOS > Install.

### 5\. "You don't have XCode Command Line tools"

*   Monters "23.6 fix.pkg" is unsupported on Sonoma, causing this error. You won't be able to run it.

You can download and run this alternative [**patcher**](https://www.mediafire.com/file/uzy5d89ufktmw9c/ADOBE+23.6+FIX.zip/file) instead. Instructions are included.

### 6\. "Error: couldn't find main entry point"

This typically means the plugin you're trying to run is missing a key file it needs to start, or it’s not installed correctly. Refer to text instructions and/or visual guides and reinstall it from scratch.

> **If seeing this with Twixtor 8, use the [RE:Vision 2303 Bundle](mac#re-visionfx).**

#### **Last Resort: Disable Gatekeeper**

Use [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to sign the plugin or disable gatekeeper, proceed with caution.

### 7\. Failed with error code 133 (Adobe)

Error 133 indicates insufficient disk space to download and install the applications. Free up some space or select another location for your app and try again.

### 8\. "Cannot be opened because it is from an unidentified developer" / "because Apple cannot check it for malicious software" / "cannot verify that this app is free from malware".

By default, macOS blocks most apps that aren’t from the App Store and lack signatures, even if they’re completely safe.

#### **If the error occurs when attempting to run any sort of dmg or pkg file:**

1.  Right-click the file *(hold Control and click the file to bring up the menu)*
2.  Select "Open"
3.  It will show a warning, but this time it will give you an “Open Anyway” button.

#### **If the error occurs for a plugin:**

1.  Click the Apple logo in the top left corner
2.  Go to System Settings
3.  Open Security & Privacy
4.  At the bottom of the window, look for a message saying the app/plugin was blocked
5.  Click **Allow Anyway**

> You might need to unlock settings by clicking the lock icon in the bottom left corner, and then entering your password.

Still having issues? Try using [Sentinel](https://itsalin.com/appInfo/?id=sentinel) to sign or unblock the app.

### 9\. "Unable to expand \[X\] into " ". (Error 79)"

This error occurs if a file hasn't been properly extracted. Please follow the instructions written at the top of our Mac page regarding how to use Keka.

### 10\. "There was a problem installing CCXProcess"

1.  Open Terminal
2.  Copy and paste the following:

```
sudo softwareupdate --install-rosetta --agree-to-license
```

3.  Press enter. After Rosetta is installed, run the Adobe installer again.

### 11\. "The file “Patch.command” could not be executed because you do not have appropriate access privileges."

1.  Open Terminal.
2.  Input the following:

```
chmod +x
```

3.  Insert a space after the command.
4.  Drop the file into Terminal.
5.  Click on the Terminal window, and then press return.

### 12\. Error creating directory / \*\*\*unknown variable asesupportfilepath 1\*\*\*

This error can appear when attempting to install Maxon plugins.

1.  Click Abort
2.  Open Terminal
3.  Input the following:

```
sudo sh /Volumes/Red\ Giant\ Installer/Red\ Giant\ Installer.app/Contents/MacOS/installbuilder.sh --mode text
```

4.  Enter you password when prompted, and then hit Y if prompted.

### 13\. Error Code 127 (Adobe)

[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This can happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.

TIP

Open the folder where you want to see the hidden files, and select "Command"+"Shift"+"." keys simultaneously.

1.  Navigate to the folder located at: `/System/Volumes/<Root Drive>/.adobeTemp`
2.  Go to **File > Get Info**, then select **Sharing & Permissions**.
3.  Select system from the **Name** column. Ensure that is has **Read & Write** privileges.
4.  Turn off your antivirus temporarily or whitelist it. You can also free up some space and retry.

### 14\. Error: SyntaxError: JSON Parse error: Unexpected EOF (-2700)

1.  Uninstall Creative Cloud with the **[Creative Cloud Cleaner Tool](https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html)**.
2.  Navigate to: `/Library/Application Support/Adobe/` and **delete** the folder "**Caps**".

> This folder stores installation records; if they’re corrupt, the installer crashes.

3.  Reinstall again.

### 15\. When I type my password in Terminal nothing happens?

For security purposes your password is completely hidden in Terminal, type the password to unlock your Mac and hit enter as normal.

### 16\. I can't find my Library folder in Finder.

Library is hidden by default on Mac. To enable it, do this:

1.  Open Finder
2.  In the top left go to **Settings > Sidebar > Enable Hard Disks**.  
    Now you'll find "Macintosh" on the left sidebar, and inside, your Library.

### 17\. "Adobe X wants to access key "Adobe Licensing Information“ in your keychain"

Either submlit the password used to unlock your Mac and click allow, or deny.

If notification persists often, run the following [dmg file.](https://www.mediafire.com/file_premium/0gu7qklf7jh2bxh/Adobe_Keychain_Fixer_v0_15_Monter_Group.dmg/file)