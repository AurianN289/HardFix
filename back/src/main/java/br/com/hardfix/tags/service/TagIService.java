package br.com.hardfix.tags.service;

import br.com.hardfix.tags.entity.Tag;

public interface TagIService {

    void save(Tag tag) throws RuntimeException;

}