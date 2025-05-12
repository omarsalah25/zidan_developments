<?php

// app/Models/Unit.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'desc', 'title_ar', 'desc_ar',
        'slug',
        'thumbnail', 'images', 'project_id',
        'location', 'location_ar',
        'construction_update', 'construction_update_ar'
    ];

    public $with =['project', 'amenities', 'unitImages'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class, 'amenity_unit');
    }

    public function unitImages()
    {
        return $this->hasMany(UnitImage::class);
    }

    public function constructionUpdates()
    {
        return $this->hasMany(ConstructionUpdate::class);
    }
}
