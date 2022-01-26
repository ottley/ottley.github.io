<?php

  $dataArray = array();
  $dataArray2 = array();

  function pg_connection_string_from_database_url() {
    extract(parse_url($_ENV["DATABASE_URL"])); 
    return "user=$user password=$pass host=$host dbname=" . substr($path, 1); # <- you may want to add sslmode=require there too
  }

  $pg_conn = pg_connect(pg_connection_string_from_database_url());
  
  if($_POST['submit'] == "yes"){
    
    //weather_location | weather_time | air_temp | wind_speed | precipitation | wave_height | wave_period | current_speed | visibility
    $result3 = pg_query($pg_conn, "
    
      INSERT INTO stormg_tides (tide_location, tide_type, tide_time) 
      SELECT 'Brighton', '".$_POST['type']."', '".$_POST['time']."'
      WHERE NOT EXISTS 
        (SELECT tide_location, tide_type, tide_time 
        FROM stormg_tides 
        WHERE tide_location = 'Brighton' AND tide_type = '".$_POST['type']."' AND tide_time = '".$_POST['time']."')
    
    ");
  }
  
    if($_POST['submitWeather'] == "yes"){
    $result5 = pg_query($pg_conn, "
    
      INSERT INTO stormg_weather (weather_location, weather_time, air_temp, wind_speed, precipitation,
       wave_height, wave_period, current_speed, visibility) 
      SELECT 'Brighton', '".$_POST['time']."', '".$_POST['airTemp']."', '".$_POST['windSpeed']."', '".$_POST['precipitation']."' 
      , '".$_POST['waveHeight']."', '".$_POST['wavePeriod']."', '".$_POST['currentSpeed']."', '".$_POST['visibility']."'
      WHERE NOT EXISTS 
        (SELECT weather_location, weather_time, air_temp, wind_speed, precipitation,
       wave_height, wave_period, current_speed, visibility  
        FROM stormg_weather 
        WHERE weather_location = 'Brighton' AND weather_time = '".$_POST['time']."' AND air_temp = '".$_POST['airTemp']."' 
         AND wind_speed = '".$_POST['windSpeed']."' AND precipitation = '".$_POST['precipitation']."' AND wave_height = '".$_POST['waveHeight']."' 
          AND wave_period = '".$_POST['wavePeriod']."' AND current_speed = '".$_POST['currentSpeed']."' AND visibility = '".$_POST['visibility']."')
    
    ");
  }
  
  if($_POST['search_location'] == "Brighton"){
    
    $result4 = pg_query($pg_conn, "select * from stormg_tides");
    while ($row = pg_fetch_row($result4)) {
      
          $dataArray[] = "$row[0]"; //location
          $dataArray[] = "$row[1]"; //high or low
          $dataArray[] = "$row[2]"; //time
      
    }
    
    echo json_encode($dataArray);
    
  }
  
  ////Brighton
  ////Weather
    if($_POST['search_locationW'] == "Brighton"){
    $result6 = pg_query($pg_conn, "select * from stormg_weather 
    where 
    weather_time = '".$_POST['day1']."T06:00:00+00:00' or
    weather_time = '".$_POST['day1']."T09:00:00+00:00' or
    weather_time = '".$_POST['day1']."T12:00:00+00:00' or
    weather_time = '".$_POST['day1']."T15:00:00+00:00' or
    weather_time = '".$_POST['day1']."T18:00:00+00:00' or
    
    weather_time = '".$_POST['day2']."T06:00:00+00:00' or
    weather_time = '".$_POST['day2']."T09:00:00+00:00' or
    weather_time = '".$_POST['day2']."T12:00:00+00:00' or
    weather_time = '".$_POST['day2']."T15:00:00+00:00' or
    weather_time = '".$_POST['day2']."T18:00:00+00:00' or
    
    weather_time = '".$_POST['day3']."T06:00:00+00:00' or
    weather_time = '".$_POST['day3']."T09:00:00+00:00' or
    weather_time = '".$_POST['day3']."T12:00:00+00:00' or
    weather_time = '".$_POST['day3']."T15:00:00+00:00' or
    weather_time = '".$_POST['day3']."T18:00:00+00:00'
    ");
    while ($row = pg_fetch_row($result6)) {
          $dataArray2[] = "$row[0]"; //location
          $dataArray2[] = "$row[1]"; //time
          $dataArray2[] = "$row[2]"; //air temp
          $dataArray2[] = "$row[3]"; //wind speed
          $dataArray2[] = "$row[4]"; //precipitation
          $dataArray2[] = "$row[5]"; //wave height
          $dataArray2[] = "$row[6]"; //wave frequency
          $dataArray2[] = "$row[7]"; //water currents
          $dataArray2[] = "$row[8]"; //visibility
        
    }

    echo json_encode($dataArray2);
  }
  
?>
