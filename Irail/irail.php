<?php
/**
 * Created by PhpStorm.
 * User: stijn
 * Date: 18-Mar-17
 * Time: 13:37
 */

require_once "business/StationsService.php";

$sService = new StationsService();
$station = $sService->getLiveBoard("Brussel-Centraal");
$stations = $sService->getStations();

include "presentation/irailStations.php";