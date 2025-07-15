<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUnitRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
{
    return [
        'project_id' => 'required|exists:projects,id',
        'title' => 'required|string',
        'title_ar' => 'required|string',
        'desc' => 'nullable|string',
        'desc_ar' => 'nullable|string',
        'thumbnail' => 'nullable|image',
        'location' => 'nullable|string',
        'location_ar' => 'nullable|string',
        'construction_update' => 'nullable|string',
        'construction_update_ar' => 'nullable|string',
        'amenities' => 'array',
        'amenities.*' => 'exists:amenities,id',
        'images' => 'array',
        'images.*' => 'image',
    ];
}


}
