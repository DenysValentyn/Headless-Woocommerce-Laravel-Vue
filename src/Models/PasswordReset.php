<?php

namespace Uasoft\Badaso\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $table = null;

    /**
     * Constructor for setting the table name dynamically
     */
    public function __construct(array $attributes = []) {
        $prefix = config('badaso.database.prefix');
        $this->table = $prefix . 'password_resets';
        parent::__construct($attributes);
    }

    protected $guarded = [];
}
