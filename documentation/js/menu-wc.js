'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api-housecamp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' : 'data-bs-target="#xs-controllers-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' :
                                            'id="xs-controllers-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' : 'data-bs-target="#xs-injectables-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' :
                                        'id="xs-injectables-links-module-AppModule-defdc090bf878e25622595df1dfc58d4d00cfe60665f091712719cdf0386de00266eafa688b7d1a1686c4eaea1a7b964cc313f6b668addbbcf986fefea873979"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EquipmentsModule.html" data-type="entity-link" >EquipmentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' : 'data-bs-target="#xs-controllers-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' :
                                            'id="xs-controllers-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' }>
                                            <li class="link">
                                                <a href="controllers/EquipmentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' : 'data-bs-target="#xs-injectables-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' :
                                        'id="xs-injectables-links-module-EquipmentsModule-311b361be24b0a07d4174ace087a604347288246650ff0cedef5c38b0a9c8f7f9d406811004413d6bab01573e02abe62cb9a2085ce61d41087e35fadbb9c63de"' }>
                                        <li class="link">
                                            <a href="injectables/EquipmentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipmentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PropertiesModule.html" data-type="entity-link" >PropertiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' : 'data-bs-target="#xs-controllers-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' :
                                            'id="xs-controllers-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' }>
                                            <li class="link">
                                                <a href="controllers/PropertiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' : 'data-bs-target="#xs-injectables-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' :
                                        'id="xs-injectables-links-module-PropertiesModule-fb86cb07b94d803b9acb61c01c3807490cf515f5d80ed42be1a193c0bcf5837effb0f04d472d8f16f2b47359ac87baccea6a642fb7b25e0373112798298eb8cb"' }>
                                        <li class="link">
                                            <a href="injectables/PropertiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' : 'data-bs-target="#xs-controllers-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' :
                                            'id="xs-controllers-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' : 'data-bs-target="#xs-injectables-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' :
                                        'id="xs-injectables-links-module-UserModule-28287f7c27640754a68832abfe50e9c35b5f7dd397c081fd2abbf5d8cb321cd597eb8e1450e9bde7a02e35917fc937f999b6438396b0abdc78ab79829f6d5840"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EquipmentsController.html" data-type="entity-link" >EquipmentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PropertiesController.html" data-type="entity-link" >PropertiesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Equipment.html" data-type="entity-link" >Equipment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Properties.html" data-type="entity-link" >Properties</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EquipmentsService.html" data-type="entity-link" >EquipmentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PropertiesService.html" data-type="entity-link" >PropertiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});