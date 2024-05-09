<?php

// app/Models/Receipt.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Receipt extends Model
{
    public static function getReceiptsByUsername($username)
    {
        $results = DB::select('SELECT * FROM receiptlog(?)', [$username]);

        return collect($results);
    }
}

