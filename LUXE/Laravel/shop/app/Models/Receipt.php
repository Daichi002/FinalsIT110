<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    protected $table = 'receipt';
    protected $primaryKey = 'orderid';
    protected $fillable = ['user_id', 'car_id']; // Update the column names

    // Assuming you want to use created_at and updated_at timestamps
    public $timestamps = true;
}
