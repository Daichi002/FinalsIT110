<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $primaryKey = 'client_id';
    public $timestamps = false;
    protected $table = 'accounts';

    protected $fillable = [
        'email',
        'user_name',
        'password',
    ];
}
