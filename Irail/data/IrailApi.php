<?php
/**
 * Created by PhpStorm.
 * User: stijn
 * Date: 29-Mar-17
 * Time: 19:23
 */
//format=json
//q=Brussel
//?q=Brussels&format=json

class IrailApi
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
        $url = 'https://api.irail.be/liveboard/?id=' . $station . '&fast=true&format=json';
        $json = file_get_contents($url, false, stream_context_create($this->arrContextOptions));
        $obj = json_decode($json, true);
        return $obj;
    }

    public function getStationLiveBoard($stad)
    {
        $ch = curl_init();
        $url = "https://irail.be/stations/NMBS?q=" . $stad;
        curl_setopt($ch, CURLOPT_URL, $url);
        $fp = fopen("data.txt", "w");
        //curl_setopt($ch,CURLOPT_HEADER,"q=Brussel");
        curl_setopt($ch, CURLOPT_FILE, $fp);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_exec($ch);
        $obj =  json_decode(file_get_contents("data.txt", true), true);
        curl_close($ch);
        fclose($fp);
        return $obj;
        //
        //
        //
        ////print_r(curl_getinfo($ch));
        ////print file_get_contents('https://irail.be/stations/NMBS');
        //
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
    }

}