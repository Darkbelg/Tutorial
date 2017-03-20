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
            "cafile" => "C:/xampp/perl/vendor/lib/Mozilla/CA/cacert.pem",
            "verify_peer" => true,
            "verify_peer_name" => true,
        ),
    );

    public function get()
    {


        $url = "https://api.irail.be/stations?q=Amsterdam&format=json";
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
$data = $obj->get();
?>
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
