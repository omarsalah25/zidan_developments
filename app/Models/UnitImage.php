<?php
// app/Models/UnitImage.php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitImage extends Model
{
    use HasFactory;

    protected $fillable = ['unit_id', 'image'];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
