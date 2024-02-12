package com.PISBP.service;

import com.PISBP.entity.User;
import com.PISBP.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(String username){
        Optional<User> oUser= userRepository.findByUserName(username);
        return oUser.get();
    }
}
