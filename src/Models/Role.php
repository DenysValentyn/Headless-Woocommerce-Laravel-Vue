<?php

namespace Uasoft\Badaso\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Role extends Model
{
    use LogsActivity;

    protected $guarded = [];

    public function users()
    {
        $userModel = User::class;

        return $this->belongsToMany($userModel, 'user_roles')
            ->select(app($userModel)->getTable().'.*')
            ->union($this->hasMany($userModel))->getQuery();
    }

    public function user_roles()
    {
        return $this->belongsTo(UserRole::class, 'role_id');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    protected static $logAttributes = true;
    protected static $logFillable = true;
    protected static $logName = 'Role';

    public function getDescriptionForEvent(string $eventName): string
    {
        return "This model has been {$eventName}";
    }
}
