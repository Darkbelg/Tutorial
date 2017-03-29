
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

<!--<ul>-->
<!---->
<!--    --><?php
//    foreach ($output["@graph"] as $station){
//        ?>
<!--        <li>-->
<!--            --><?php
//            print($station["name"])
//            ?>
<!--        </li>-->
<!--        --><?php
//    }
//    ?>
<!--    <li>-->
<!--        --><?php
//        var_dump($output);
//
//        ?>
<!--    </li> <li>-->
<!--        --><?php
//        print_r($output);
//        ?>
<!--    </li> <li>-->
<!--        --><?php
//        print ($output);
//        ?>
<!--    </li>-->
<!--    <li>-->
<!--        --><?php
//        var_dump($ch);
//        ?>
<!--    </li>-->
<!--</ul>-->
<!---->
<!--<ul>-->
<!--    <li>-->
<!--        --><?php
//        $objstations = $obj->getStations();
//        var_dump($objstations);
//
//
//        ?>
<!--    </li>-->
<!--</ul>-->
<!---->
<!---->
<!--<ul>-->
<!--    <!--    <li>-->
<!--    <!--        --><?php
//    //        var_dump($data);
//    //        ?>
<!--    <!--    </li>-->
<!--    <li>-->
<!--        --><?php
//        print($data["Tielt"]["name"]);
//        $station = $obj->liveBoard($data["Tielt"]["id"]);
//        print_r($station);
//        var_dump($station);
//        ?>
<!--    </li>-->
<!--</ul>-->
<ul>
    <?php
    foreach ($station as $treinen) {
        ?>
        <li>
            <?php
            print_r($treinen);
            ?>
        </li>
        <?php
    }
    ?>
</ul>
<ul>
    <?php
//    foreach ($stations as $station) {
        ?>
        <li>
            <?php
            var_dump($stations);
            ?>
        </li>
        <?php
//    }
    ?>
</ul>
</body>
</html>
