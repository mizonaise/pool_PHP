#!/usr/bin/php
<?php
    if ($argc == 2)
    {
		$tr = trim($argv[1]);
		$str = preg_replace('/ +/', ' ',$tr);
		echo $str."\n";
    }
?>