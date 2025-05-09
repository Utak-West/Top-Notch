<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** Using SQLite */
define( 'DB_DIR', ABSPATH . 'wp-content/database/' ); // Added trailing slash for directory
define( 'DB_FILE', '.ht.sqlite' );

// ** MySQL Database settings - Commented out for SQLite ** //
// /** The name of the database for WordPress */
// define( 'DB_NAME', 'database_name_here' );

// /** Database username */
// define( 'DB_USER', 'username_here' );

// /** Database password */
// define( 'DB_PASSWORD', 'password_here' );

// /** Database hostname */
// define( 'DB_HOST', 'localhost' );

// /** Database charset to use in creating database tables. */
// define( 'DB_CHARSET', 'utf8' );

// /** The database collate type. Don't change this if in doubt. */
// define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define("AUTH_KEY",         '?|x#!aFl!`~f1$-v-+a92|wTtCXj-/zEJhWYr.d|I`A+$k,?8FvoL+jNMY+[=^LA');
define("SECURE_AUTH_KEY",  '|/z`jxbH-zuMl> }hplje~?Cn:Rd!-9U`&nxK!Z}qHut%tk@NZw65?A29<EobeUV');
define("LOGGED_IN_KEY",    'qov@PlwY{5JV]Fc|!^Z0uT5uR&h7oFm1+MU?=/Mj2dD$tKc9nSj!p+5Wh}6l4@?+');
define("NONCE_KEY",        '-<cNzu-OE-|9KVFL|&AY}I:=xq?F+~O3 4`Y40-#[|v 2(Y,khnnCQTD|@~J|_9(');
define("AUTH_SALT",        '%7-_M%MW*T7YIzkZ[R4I8G,nH%8seL.^7oCSv&B#%c+LHT:9Op@d+i5+NG2m_+9,');
define("SECURE_AUTH_SALT", 'rHW69DWa4m|md$Ad5x*Dg-U}Hrd~} oy-%L+@rJD6F#jQj&t]k=71Yr+.SAK+Qo!');
define("LOGGED_IN_SALT",   'e1Z/<8q:DM3tK-9-+@6O=3Du2kSi|lT%U:L),3Ume**t]/,8FyNN1#5_po(LVw+.');
define("NONCE_SALT",       'pVBf^7T=(ji8!}T{&YTQyS[*wZpoRZp<KU2#w{p@81nm6`/jh_RHQ+>0@z]ex=6:');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
