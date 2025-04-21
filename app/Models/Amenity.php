<?php

// app/Models/Amenity.php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amenity extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'name_ar', 'icon'];

    public function units()
    {
        return $this->belongsToMany(Unit::class, 'amenity_unit');
    }
}
