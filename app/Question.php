<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['text', 'answer', 'company'];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
