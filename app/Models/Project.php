<?php

// app/Models/Project.php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'desc', 'title_ar', 'desc_ar', 'image', 'status'];

    public function units()
    {
        return $this->hasMany(Unit::class);
    }
}
