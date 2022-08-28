const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const config = require('../../wdio.conf').config;
const resource = require('..//..//environments//resources.json');
const assert = require('assert');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(config.MMT.concat(resource.mmt.hotels));
        assert.equal(1,2,"not equal");
    });
});
//test

