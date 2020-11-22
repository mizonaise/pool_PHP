#!/usr/bin/php
<?PHP
    if ($argc != 4  || $argc == 1)
        echo "Incorrect Parameters\n";
    else
    {
        $a = trim($argv[1]);
		$b = trim($argv[3]);
		$sign = trim($argv[2]);
		if (!is_numeric($a) || !is_numeric($b))
			echo "Incorrect Parameters\n";
        else if (($sign == "%" || $sign == "/") && $b == 0)
            echo "Incorrect Parameters\n";
        else if ($sign == "+")
            echo $a + $b."\n";
        else if ($sign == "-")
            echo $a - $b."\n";
        else if ($sign == "*")
            echo $a * $b."\n";
        else if ($sign == "/")
            echo $a / $b."\n";
        else if ($sign == "%")
            echo $a % $b."\n";
    }
?>