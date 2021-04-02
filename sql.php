<?php
    header("Content-Type: application/json");

    $json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str, true);
    $ingredient = $json_obj['ingred'];
    $recipes = [];
    $mysqli = new mysqli('localhost', 'root', 'justbrokemyhip', 'RecipEase');
    if($mysqli->connect_errn){
        exit;
    }
    $stmt = $mysqli->prepare("select Recipe, id from Recipes where Ingredient = ?");
    if(!$stmt){
        printf("Query prep failed: %s\n", $mysqli->error);
        exit;
    }
    $stmt->bind_param('s',"~*" + $ingredient);
    $stmt->execute();
    $stmt->bind_result($id,$recipe);
    $recipes = $recipe;
    $stmt->close();
    echo json_encode(array(
        "ingredi" => $recipes
    ));

?>