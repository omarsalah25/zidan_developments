<?php
// app/Models/ConstructionUpdate.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConstructionUpdate extends Model
{
    use HasFactory;

    protected $fillable = ['unit_id', 'construction_update', 'construction_update_ar'];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
