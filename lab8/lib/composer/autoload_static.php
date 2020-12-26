<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita9c772a2fa1522f8c5e0e3ddf5ec6698
{
    public static $prefixLengthsPsr4 = array (
        'Y' => 
        array (
            'YandexCheckout\\' => 15,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'YandexCheckout\\' => 
        array (
            0 => __DIR__ . '/..' . '/yandex-money/yandex-checkout-sdk-php/lib',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita9c772a2fa1522f8c5e0e3ddf5ec6698::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita9c772a2fa1522f8c5e0e3ddf5ec6698::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}