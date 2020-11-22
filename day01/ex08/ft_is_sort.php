<?php
	function ft_is_sort($array)
	{
		$sort_array = $array;
		$rsort_array = $array;
		sort($sort_array);
		rsort($rsort_array);
		if($array == $sort_array || $array == $rsort_array)
			return (true);
		else	
			return (false);
	}
?>