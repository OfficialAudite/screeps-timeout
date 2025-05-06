![NPM Version](https://img.shields.io/npm/v/screepsmod-timeout)
![NPM License](https://img.shields.io/npm/l/screepsmod-timeout)
![npm bundle size](https://img.shields.io/bundlephobia/min/screepsmod-timeout)
![NPM Last Update](https://img.shields.io/npm/last-update/screepsmod-timeout)
![NPM Downloads](https://img.shields.io/npm/dm/screepsmod-timeout)

# screeps-timeout
A mod that fixes hard stuck ticks because of undefined timeout value.

[![NPM info](https://nodei.co/npm/screepsmod-timeout.png?mini=true)](https://npmjs.org/package/screepsmod-timeout)

Shoutout to **drdvorak** and **chaosmark** on discord for finding the issue!

# How to install the mod to your server:

- First you will need [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) and [screepsmod-admin-utils](https://github.com/ScreepsMods/screepsmod-admin-utils)
- Second, in config.yml add this:
```yaml
mods:
  - screepsmod-mongo
  - screepsmod-admin-utils
  - screepsmod-auth
  - screepsmod-timeout
```
- When you run/restart the server it should be installed and running

## Or if you want to install it manualy:
`npm install screepsmod-timeout` in your server folder.
