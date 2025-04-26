<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'title_ar' => 'required|string',
            'desc' => 'nullable|string',
            'desc_ar' => 'nullable|string',
            'image' => 'nullable|image',
            'status' => 'required|boolean',
        ];
    }

}
