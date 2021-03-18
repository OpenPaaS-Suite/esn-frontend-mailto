angular
  .module('linagora.esn.unifiedinbox.mailto')
  .run(function($templateCache) {
    $templateCache.put('/unifiedinbox/app/components/composer/boxed/composer-boxed.html', require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/components/composer/boxed/composer-boxed.pug'));
    $templateCache.put('/unifiedinbox/app/components/composer/composer-desktop.html', require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/components/composer/composer-desktop.pug'));
    $templateCache.put('/views/commons/loading.html', require('esn-frontend-inbox/src/app/app-loading.pug'));
    $templateCache.put('/unifiedinbox/app/components/composer/composer-desktop.html', require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/components/composer/composer-desktop.pug'));
    $templateCache.put('/unifiedinbox/app/components/composer/composer-mobile.html', require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/components/composer/composer-mobile.pug'));
    $templateCache.put('/unifiedinbox/views/composer/recipients-autocomplete-input-tag.html', require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/views/composer/recipients-autocomplete-input-tag.pug'));
  })
  .run(function(sessionFactory, mailtoMailComposer) {
    sessionFactory.bootstrapSession().then(() => {
      mailtoMailComposer.openComposer();
    });
  })
  .run(function(mailtoCloseWindowService) {
    mailtoCloseWindowService.setup();
  });
