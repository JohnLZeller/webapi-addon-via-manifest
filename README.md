# webapi-addon-via-manifest

The purpose of this repo is to build an extension that runs on b2g-desktop

* .gaia.diff holds all changes I make to gaia

To build gaia with changes, run 'make DESKTOP_SHIMS=1 NOFTU=1 DEBUG=1'

## Troubleshooting
* Discovered that install.rdf had the guid of firefox and not b2g
  * Firefox GUID: ec8030f7-c20a-464f-9b0e-13a3a9e97384
  * B2G GUID: 3c2e2abc-06d4-11e1-ac3b-374f68613e61
