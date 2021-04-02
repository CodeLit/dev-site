<?php

use Illuminate\Support\Facades\DB;

$postsWithAttributes = DB::table('posts')
    ->leftJoin('post_ext_attributes', 'posts.id', '=', 'post_ext_attributes.post_id')
    ->select('posts.*', 'post_ext_attributes.*')
    ->orderBy('id', 'desc')
    ->limit(100)
    ->get();
