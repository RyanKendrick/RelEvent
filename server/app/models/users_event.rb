class UsersEvent < ApplicationRecord
  belongs_to :event
  belongs_to :user

  # CHANGED
  validates_uniqueness_of :user_id, :scope => :event_id
end
