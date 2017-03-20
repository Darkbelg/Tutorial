<?php
/**
 * Created by PhpStorm.
 * User: stijn
 * Date: 18-Mar-17
 * Time: 13:37
 */
//format=json
//q=Brussel
//?q=Brussels&format=json

class LezenData
{
    private $arrContextOptions = array(
        "ssl" => array(
            "cafile" => "cacert.pem",
            "verify_peer" => true,
            "verify_peer_name" => true,
        ),
    );

    public function get()
    {

		$url = "https://api.irail.be/stations?format=json";
        $json = file_get_contents($url, false, stream_context_create($this->arrContextOptions));
        $obj = json_decode($json, true);
        $stations = array();
//foreach ($obj["station"] as $station){
//    array_push($stations[$station["name"]],$station);
//}
//
        for ($i = 0; $i < count($obj["station"]); $i++) {
            $stations[$obj["station"][$i]["name"]] = $obj["station"][$i];
        }

        return $stations;
    }

	public function getStations()
	{
		$url = "https://irail.be/stations/NMBS";
		$json = file_get_contents($url, false, stream_context_create($this->arrContextOptions));
		$obj = json_decode($json, true);

		return $obj;
    }

    public function liveBoard($station)
    {
        $url = 'https://api.irail.be/liveboard/?id='. $station .'&fast=true&format=json' ;
        $json = file_get_contents($url, false, stream_context_create($this->arrContextOptions));
        $obj = json_decode($json, true);
        return $obj;
    }
}


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>irail</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>

<h1>Welcome</h1>
<?php
$obj = new LezenData();
//$data = $obj->get();
//
$ch=curl_init();
//
//
$stad= "Brussel";
curl_setopt($ch,CURLOPT_URL,"https://irail.be/stations/NMBS?q=" . $stad);
$fp = fopen("data.txt","w");
//curl_setopt($ch,CURLOPT_HEADER,"q=Brussel");
curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

//


curl_exec($ch);
$output = json_decode(file_get_contents("data.txt",true),true);

//$output = json_decode();
//$objstaion = json_decode($output,true);
//var_dump($objstaion);
////var_dump($ch);
////print_r($ch);
////print($ch);
////print($ch["@graph"]);
//?>
<ul>

    <?php
    foreach ($output["@graph"] as $station){
    ?>
    <li>
        <?php
            print($station["name"])
        ?>
    </li>
    <?php
    }
    ?>
    <li>
        <?php
		var_dump($output);

		?>
    </li> <li>
        <?php
		print_r($output);
        ?>
    </li> <li>
        <?php
		print ($output);
        ?>
    </li>
<li>
        <?php
		var_dump($ch);
        ?>
    </li>
</ul>

<?php
//
//
//
////print_r(curl_getinfo($ch));
////print file_get_contents('https://irail.be/stations/NMBS');
//
curl_close($ch);
fclose($fp);

//$ch = curl_init("https://irail.be/stations/NMBS?q=Brussel");
//$fp = fopen("example_homepage.txt", "w");
//
//curl_setopt($ch, CURLOPT_FILE, $fp);
//curl_setopt($ch, CURLOPT_HEADER, 0);
//
//curl_exec($ch);
//curl_close($ch);
//fclose($fp);

//curl_init("https://irail.be/stations/NMBS");
//curl_exec()

?>
<ul>
    <li>
        <?php
        $objstations = $obj->getStations();
        var_dump($objstations);


        ?>
    </li>
</ul>


<ul>
<!--    <li>-->
<!--        --><?php
//        var_dump($data);
//        ?>
<!--    </li>-->
    <li>
        <?php
        print($data["Tielt"]["name"]);
        $station = $obj->liveBoard($data["Tielt"]["id"]);
        print_r($station);
        var_dump($station);
        ?>
    </li>
</ul>

</body>
</html>
