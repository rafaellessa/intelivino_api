-- CreateTable
CREATE TABLE `activities` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activities_business` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `activity_id` INTEGER UNSIGNED NULL,
    `business_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `activities_business_activity_id_foreign`(`activity_id`),
    INDEX `activities_business_business_id_foreign`(`business_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `albums` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `description` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `type_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `albums_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_postswp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NULL,
    `post_id` INTEGER NOT NULL,
    `post_title` VARCHAR(99) NOT NULL,
    `post_subtitle` TEXT NOT NULL,
    `post_image` VARCHAR(199) NULL,
    `post_exerpt` TEXT NULL,
    `post_date` DATETIME(0) NOT NULL,
    `post_text` TEXT NOT NULL,
    `post_nome_vinho` VARCHAR(99) NULL,
    `post_ano` VARCHAR(99) NULL,
    `post_uva` VARCHAR(99) NULL,
    `post_pais` VARCHAR(99) NULL,
    `post_regiao` VARCHAR(99) NULL,
    `post_tipo_vinho` VARCHAR(99) NULL,
    `post_valor` VARCHAR(16) NULL,
    `post_teor` VARCHAR(16) NULL,
    `post_loja` VARCHAR(99) NULL,
    `post_texto_geral` TEXT NULL,

    INDEX `post_id`(`post_id`),
    INDEX `post_nome_vinho`(`post_nome_vinho`),
    INDEX `post_pais`(`post_pais`),
    INDEX `post_regiao`(`post_regiao`),
    INDEX `post_tipo_vinho`(`post_tipo_vinho`),
    INDEX `post_title`(`post_title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banners` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `order` VARCHAR(255) NULL,
    `active` VARCHAR(255) NULL DEFAULT '1',
    `link` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `base_url` VARCHAR(255) NULL,
    `image_url` VARCHAR(255) NULL,
    `image_width` VARCHAR(255) NULL,
    `image_height` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `sorteio_id` INTEGER UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `cnpj` VARCHAR(255) NULL,
    `cpf` VARCHAR(255) NULL,
    `fone` VARCHAR(255) NULL,
    `intelivino_market` VARCHAR(255) NULL,
    `logotipo_url` VARCHAR(255) NULL,
    `main_contact_fone` VARCHAR(255) NULL,
    `main_contact_name` VARCHAR(255) NULL,
    `person_type` VARCHAR(255) NULL,
    `self_delivery` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `whatsapp` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `razao_social` VARCHAR(255) NULL,
    `user_id_parent` INTEGER NULL,
    `description` VARCHAR(255) NULL,
    `obs` VARCHAR(255) NULL,
    `status` BOOLEAN NULL,
    `facebook_url` VARCHAR(255) NULL,
    `instagram_url` VARCHAR(255) NULL,
    `cor_texto_cabecalho` VARCHAR(255) NULL,
    `banner_catalogo_url` VARCHAR(255) NULL,

    INDEX `business_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaigns` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `info` VARCHAR(5000) NULL,
    `description` VARCHAR(255) NULL,
    `discount` DECIMAL(8, 2) NULL,
    `date_start` DATE NULL,
    `date_end` DATE NULL,
    `status` BOOLEAN NULL,
    `user_id` INTEGER UNSIGNED NULL,
    `user_id_parent` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `type` INTEGER NULL,

    INDEX `campaigns_type_foreign`(`type`),
    INDEX `campaigns_user_id_foreign`(`user_id`),
    INDEX `campaigns_user_id_parent_foreign`(`user_id_parent`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaigns_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `campaign_id` INTEGER UNSIGNED NULL,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `status` BOOLEAN NULL,
    `obs` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `campaigns_indicacoes_campaign_id_foreign`(`campaign_id`),
    INDEX `campaigns_indicacoes_indicacao_id_foreign`(`indicacao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaigns_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `wp_parent_id` INTEGER UNSIGNED NULL,
    `wp_category_id` INTEGER UNSIGNED NULL,
    `name` VARCHAR(255) NOT NULL,
    `cat` BOOLEAN NULL,
    `dog` BOOLEAN NULL,
    `menu` INTEGER NULL,
    `menu_sequence` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `tipo` VARCHAR(255) NULL,
    `final` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories_devices` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `device_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `categories_devices_device_id_foreign`(`device_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories_history` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `history_id` INTEGER UNSIGNED NULL,
    `category_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `categories_history_category_id_foreign`(`category_id`),
    INDEX `categories_history_history_id_foreign`(`history_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `user_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `categories_users_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveries` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveries_business` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `delivery_id` INTEGER UNSIGNED NULL,
    `business_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `deliveries_business_business_id_foreign`(`business_id`),
    INDEX `deliveries_business_delivery_id_foreign`(`delivery_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `devices` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `installation_id` VARCHAR(255) NOT NULL,
    `platform` VARCHAR(255) NOT NULL,
    `version` VARCHAR(255) NULL,
    `token_notification` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `favorites` LONGTEXT NULL,
    `user_id` INTEGER UNSIGNED NULL,
    `saas_client_id` INTEGER UNSIGNED NULL,

    INDEX `devices_saas_client_id_foreign`(`saas_client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `devices_notifications` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `device_id` INTEGER UNSIGNED NULL,
    `notification_id` INTEGER UNSIGNED NULL,
    `notification_ref` VARCHAR(300) NULL,
    `post_id` INTEGER UNSIGNED NULL,
    `send` BOOLEAN NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `business` BOOLEAN NULL DEFAULT false,
    `queue` VARCHAR(30) NULL,

    INDEX `devices_notifications_device_id_foreign`(`device_id`),
    INDEX `devices_notifications_notification_id_foreign`(`notification_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experiencias_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `experiencias_indicacoes_category_id_foreign`(`category_id`),
    INDEX `experiencias_indicacoes_indicacao_id_foreign`(`indicacao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `device_id` INTEGER UNSIGNED NULL,
    `post_id` INTEGER UNSIGNED NULL,
    `category_id` INTEGER UNSIGNED NULL,
    `push` BOOLEAN NULL,
    `latitude` VARCHAR(15) NULL,
    `longitude` VARCHAR(15) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `history_device_id_foreign`(`device_id`),
    INDEX `history_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `loja_id` INTEGER UNSIGNED NULL,
    `tipo_indicacao_id` INTEGER UNSIGNED NULL,
    `codigo_interno` VARCHAR(255) NULL,
    `nome` VARCHAR(255) NULL,
    `meta_pais_id` INTEGER UNSIGNED NULL,
    `meta_regiao_id` INTEGER UNSIGNED NULL,
    `vinicola_id` INTEGER UNSIGNED NULL,
    `meta_tipo_vinho_id` INTEGER UNSIGNED NULL,
    `safra` CHAR(4) NULL,
    `porcentagem_alcool` DECIMAL(8, 2) NULL,
    `uva_id` INTEGER UNSIGNED NULL,
    `descricao` TEXT NULL,
    `preco` DECIMAL(8, 2) NULL,
    `preco_promocional` DECIMAL(8, 2) NULL,
    `motor_venda_id` INTEGER UNSIGNED NULL,
    `link` VARCHAR(255) NULL,
    `status_indicacao_id` INTEGER UNSIGNED NULL,
    `data_postagem` DATE NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `estoque` INTEGER NULL DEFAULT 0,
    `busca_index` LONGTEXT NULL,
    `sem_safra` BOOLEAN NULL,
    `ordem` VARCHAR(255) NULL,
    `destaque` VARCHAR(255) NULL,
    `cod_ref` VARCHAR(255) NULL,

    INDEX `indicacoes_loja_id_foreign`(`loja_id`),
    INDEX `indicacoes_meta_pais_id_foreign`(`meta_pais_id`),
    INDEX `indicacoes_meta_regiao_id_foreign`(`meta_regiao_id`),
    INDEX `indicacoes_meta_tipo_vinho_id_foreign`(`meta_tipo_vinho_id`),
    INDEX `indicacoes_motor_venda_id_foreign`(`motor_venda_id`),
    INDEX `indicacoes_status_indicacao_id_foreign`(`status_indicacao_id`),
    INDEX `indicacoes_tipo_indicacao_id_foreign`(`tipo_indicacao_id`),
    INDEX `indicacoes_user_id_foreign`(`user_id`),
    INDEX `indicacoes_uva_id_foreign`(`uva_id`),
    INDEX `indicacoes_vinicola_id_foreign`(`vinicola_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indicacoes_uvas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `uva_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `indicacoes_uvas_indicacao_id_foreign`(`indicacao_id`),
    INDEX `indicacoes_uvas_uva_id_foreign`(`uva_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lojas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_atividades_vinicolas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_bairros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `municipio_id` INTEGER NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_categorias` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(240) NOT NULL,
    `master_id` INTEGER NULL,
    `alias` VARCHAR(90) NOT NULL,
    `categorization` VARCHAR(25) NULL,

    UNIQUE INDEX `id`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_estados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pais_id` INTEGER NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_municipios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado_id` INTEGER NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_paises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `campo` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,
    `descricao` VARCHAR(65) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_regioes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `meta_pais_id` INTEGER NULL,
    `meta_estado_id` INTEGER NULL,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_regioes_business` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `meta_pais_id` INTEGER NULL,
    `meta_estado_id` INTEGER NULL,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_subregioes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `regiao_id` INTEGER NOT NULL,
    `campo` VARCHAR(45) NOT NULL,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,
    `flag_intelivino` INTEGER NULL DEFAULT 1,
    `flag_business` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_tipos_vinhos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `descricao` VARCHAR(85) NOT NULL,
    `valor` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motores_vendas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `post_id` INTEGER UNSIGNED NULL,
    `title` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `nome` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `telefone_celular` VARCHAR(255) NULL,
    `telefone_fixo` VARCHAR(255) NULL,
    `cep` VARCHAR(255) NULL,
    `estado` VARCHAR(255) NULL,
    `cidade` VARCHAR(255) NULL,
    `bairro` VARCHAR(255) NULL,
    `endereco` VARCHAR(255) NULL,
    `numero` VARCHAR(255) NULL,
    `complemento` VARCHAR(255) NULL,
    `obs_endereco` VARCHAR(255) NULL,
    `obs_gerais` VARCHAR(255) NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `uid` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `pedidos_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `pedido_id` INTEGER UNSIGNED NULL,
    `qtd` INTEGER NULL,
    `valor` DECIMAL(8, 2) NULL,
    `total` DECIMAL(8, 2) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `pedidos_indicacoes_indicacao_id_foreign`(`indicacao_id`),
    INDEX `pedidos_indicacoes_pedido_id_foreign`(`pedido_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions_roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `permission_id` INTEGER UNSIGNED NULL,
    `role_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `permissions_roles_permission_id_foreign`(`permission_id`),
    INDEX `permissions_roles_role_id_foreign`(`role_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photos` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `album_id` INTEGER UNSIGNED NULL,
    `base_url` VARCHAR(255) NULL,
    `photo_url` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `width` VARCHAR(6) NULL,
    `height` VARCHAR(6) NULL,

    INDEX `photos_album_id_foreign`(`album_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planos` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NULL,
    `nome` VARCHAR(255) NULL,
    `valor_plano` DECIMAL(8, 2) NULL,
    `max_rotulos` INTEGER NULL,
    `max_users` INTEGER NULL,
    `status` BOOLEAN NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `highlight_indications` INTEGER NOT NULL DEFAULT 0,
    `normal_indications` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planos_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `plano_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `planos_users_plano_id_foreign`(`plano_id`),
    INDEX `planos_users_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pratos_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `pratos_indicacoes_category_id_foreign`(`category_id`),
    INDEX `pratos_indicacoes_indicacao_id_foreign`(`indicacao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `roles_role_unique`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saas_client` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `site_wp` VARCHAR(255) NOT NULL,
    `master` INTEGER NULL,
    `saas_client_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `saas_client_saas_client_id_foreign`(`saas_client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sorteios` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `descricao` VARCHAR(255) NULL,
    `data_inicial` DATE NULL,
    `data_final` DATE NULL,
    `ativo` BOOLEAN NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sorteios_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `sorteio_id` INTEGER UNSIGNED NULL,
    `user_id` INTEGER UNSIGNED NULL,
    `cod` VARCHAR(255) NOT NULL,
    `vencedor` BOOLEAN NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `sorteios_users_cod_unique`(`cod`),
    INDEX `sorteios_users_sorteio_id_foreign`(`sorteio_id`),
    INDEX `sorteios_users_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `birthday` DATE NULL,
    `state` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `favorites` LONGTEXT NULL,
    `cat` TINYINT NULL,
    `dog` TINYINT NULL,
    `photo` LONGTEXT NULL,
    `google` VARCHAR(255) NULL,
    `facebook` VARCHAR(255) NULL,
    `apple` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `notification` TINYINT NULL,
    `rdstation_sync` BOOLEAN NULL,
    `rdstation_id` VARCHAR(255) NULL,
    `rdstation_error` VARCHAR(255) NULL,
    `address_cep` VARCHAR(255) NULL,
    `address_complement` VARCHAR(255) NULL,
    `address_country` VARCHAR(255) NULL,
    `address_neighborhood` VARCHAR(255) NULL,
    `address_number` VARCHAR(255) NULL,
    `address_street` VARCHAR(255) NULL,
    `name_business` VARCHAR(255) NULL,
    `name_business_slug` VARCHAR(255) NULL,
    `plano_id` INTEGER NULL,
    `cod_ref` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NULL,
    `role_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `users_roles_role_id_foreign`(`role_id`),
    INDEX `users_roles_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uvas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `valores_indicacoes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NULL,
    `indicacao_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `valores_indicacoes_category_id_foreign`(`category_id`),
    INDEX `valores_indicacoes_indicacao_id_foreign`(`indicacao_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videos` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `order` VARCHAR(255) NULL,
    `active` VARCHAR(255) NULL DEFAULT '1',
    `link` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vinhos_doc` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vinicolas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `nome` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `activities_business` ADD CONSTRAINT `activities_business_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `activities`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `activities_business` ADD CONSTRAINT `activities_business_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `albums` ADD CONSTRAINT `albums_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `business` ADD CONSTRAINT `business_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_type_foreign` FOREIGN KEY (`type`) REFERENCES `campaigns_types`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_user_id_parent_foreign` FOREIGN KEY (`user_id_parent`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `campaigns_indicacoes` ADD CONSTRAINT `campaigns_indicacoes_campaign_id_foreign` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `campaigns_indicacoes` ADD CONSTRAINT `campaigns_indicacoes_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories_devices` ADD CONSTRAINT `categories_devices_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories_history` ADD CONSTRAINT `categories_history_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories_history` ADD CONSTRAINT `categories_history_history_id_foreign` FOREIGN KEY (`history_id`) REFERENCES `history`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categories_users` ADD CONSTRAINT `categories_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `deliveries_business` ADD CONSTRAINT `deliveries_business_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `deliveries_business` ADD CONSTRAINT `deliveries_business_delivery_id_foreign` FOREIGN KEY (`delivery_id`) REFERENCES `deliveries`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_saas_client_id_foreign` FOREIGN KEY (`saas_client_id`) REFERENCES `saas_client`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `devices_notifications` ADD CONSTRAINT `devices_notifications_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `devices_notifications` ADD CONSTRAINT `devices_notifications_notification_id_foreign` FOREIGN KEY (`notification_id`) REFERENCES `notifications`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `experiencias_indicacoes` ADD CONSTRAINT `experiencias_indicacoes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `experiencias_indicacoes` ADD CONSTRAINT `experiencias_indicacoes_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `indicacoes_uvas` ADD CONSTRAINT `indicacoes_uvas_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `indicacoes_uvas` ADD CONSTRAINT `indicacoes_uvas_uva_id_foreign` FOREIGN KEY (`uva_id`) REFERENCES `uvas`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pedidos_indicacoes` ADD CONSTRAINT `pedidos_indicacoes_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pedidos_indicacoes` ADD CONSTRAINT `pedidos_indicacoes_pedido_id_foreign` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `permissions_roles` ADD CONSTRAINT `permissions_roles_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `permissions_roles` ADD CONSTRAINT `permissions_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photos` ADD CONSTRAINT `photos_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `planos_users` ADD CONSTRAINT `planos_users_plano_id_foreign` FOREIGN KEY (`plano_id`) REFERENCES `planos`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `planos_users` ADD CONSTRAINT `planos_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pratos_indicacoes` ADD CONSTRAINT `pratos_indicacoes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pratos_indicacoes` ADD CONSTRAINT `pratos_indicacoes_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `saas_client` ADD CONSTRAINT `saas_client_saas_client_id_foreign` FOREIGN KEY (`saas_client_id`) REFERENCES `saas_client`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sorteios_users` ADD CONSTRAINT `sorteios_users_sorteio_id_foreign` FOREIGN KEY (`sorteio_id`) REFERENCES `sorteios`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sorteios_users` ADD CONSTRAINT `sorteios_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `valores_indicacoes` ADD CONSTRAINT `valores_indicacoes_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `valores_indicacoes` ADD CONSTRAINT `valores_indicacoes_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
