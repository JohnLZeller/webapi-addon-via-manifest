# webapi-addon-via-manifest

The purpose of this repo is to build an extension that runs on b2g-desktop

* .gaia.diff holds all changes I make to gaia

To build gaia with changes, run 'make DESKTOP_SHIMS=1 NOFTU=1 DEBUG=1'

## Troubleshooting
* Discovered that install.rdf had the guid of firefox and not b2g
  * Firefox GUID: ec8030f7-c20a-464f-9b0e-13a3a9e97384
  * B2G GUID: 3c2e2abc-06d4-11e1-ac3b-374f68613e61

## Ideas
* The urls for 'xmlns' and 'xmlns:em' in install.rdf are opposite of the ones found in the install.rdf of the 'Screen Reader Simulator' extension that is packaged with gaia
	* 'Screen Reader Simulator': http://addons.mozilla.org/firefox/downloads/latest/440614/addon-440614-latest.xpi
* unpack and boostrap options are both set to true in the install.rdf found in the 'Screen Reader Simulator' extension